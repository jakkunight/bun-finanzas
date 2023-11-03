import { initTRPC } from "@trpc/server";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { z } from "zod";
// import { hash, verify } from "argon2";
import prisma from "./db";

export const createContext = async (opts: FetchCreateContextFnOptions) => {
	return {
		user: {
			email: "",
			id: 0
		}
	};
};

export const app = initTRPC.context<Awaited<ReturnType<typeof createContext>>>().create();
export const isAuth = app.middleware(async (opts) => {
	if(!opts.ctx.user.id || !opts.ctx.user.email){
		throw new Error("User is not logged in!");
	}
	return opts.next({
		ctx: {
			user: opts.ctx.user
		}
	});
});
export const router = app.router({
	// Signin
	// Signup
	// Suscriptions
	// Push
	push: app.procedure.use(isAuth).input(z.object({
		transactions: z.optional(z.object({
			concept: z.bigint().positive(),
			amount: z.number().nonnegative()
		}).array()),
		user: z.optional(z.object({
			username: z.optional(z.string().min(1)),
			email: z.optional(z.string().email()),
			balance: z.optional(z.number()),
			currency: z.optional(z.string()),
			password: z.optional(z.string().min(8))
		})),
		concepts: z.optional(z.object({
			concept: z.string().min(1),
			description: z.optional(z.string())
		}).array())
	})).mutation(async ({ ctx, input }) => {
		if(!input){
			return;
		}
		if(input.concepts){
			input.concepts.forEach(async (concept) => {
				await prisma.concept.upsert({
					update: {
						concept: concept.concept,
						description: concept.description
					},
					create: {
						concept: concept.concept,
						description: concept.description,
						user: ctx.user.id
					},
					where: {
						user: ctx.user.id,
						
					}
				})
			});
		}
	}),
	// Pull
	pull: app.procedure.use(isAuth).query(async ({ ctx }) => {
		return {
			data: await prisma.user.findUnique({
				select: {
					email: true,
					balance: true,
					currency: true,
					username: true
				},
				where: {
					email: ctx.user.email
				}
			}),
			transactions: await prisma.transaction.findMany({
				where: {
					user: ctx.user.id
				}
			}),
			concepts: await prisma.concept.findMany({
				where: {
					user: ctx.user.id
				}
			}),
			types: await prisma.type.findMany()
		}
	})
});

export type Router = typeof router;