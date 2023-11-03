import { Elysia } from "elysia";
import { trpc } from "@elysiajs/trpc";
import { createContext, router } from "./router";
import type { Router } from "./router";

const server = new Elysia()
	.use(
		trpc(router, {
			createContext,
			endpoint: "/api"
		})
	)
	.listen(process.env.PORT || 8080);
console.log(`🦊 Elysia is running at http://${server.server?.hostname}:${server.server?.port}/`);
