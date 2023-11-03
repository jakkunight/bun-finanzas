# bun-finanzas
## A re-implementation of the "finanzas-ts" project.
Since I was waitting for the release of [BunJS](https://bun.sh), I decided to re-implement the old 
[finanzas-ts](https://github.com/jakkunight/finanzas-ts) with another stack and adding support for new things, 
like SQLite databases or mobile platforms out of the web.

I found myself enjoying with bun, writing code with [ElysiaJS](https://elysiajs.com) and the new 
[Expo](https://expo.dev) SDK (49+).

As I always say: LET'S CODE!!!
## Features:
The app does nothing for now, but you can still use the models for the database, since they're ready to use.
## TODO List:
- [x] SQL Models for all the database engines ([MySQL](https://www.mysql.com)/[PlanetScale](https://planetscale.com)/
[SQLite](https://sqlite.org))
- [ ] Backend server with ElysiaJS.
- [x] Support for [tRPC](https://trpc.io).
- [x] Support for [Prisma ORM](https://prisma.io)
- [ ] Web client with [ReactJS](https://reactjs.org) or [SvelteKit](https://kit.svelte.dev). (I love SvelteKit)
- [ ] Mobile app client with Expo.
- [ ] Deploy of the web application on GitHub Pages (Static Page).
- [ ] ~~Deploy of the server on Railway (with [NodeJS](https://nodejs.dev)).~~
- [ ] Deploy of the server on [fly.io](https://fly.io) (with [NodeJS](https://nodejs.dev)).
- [ ] Publishing the mobile app on the "Expo Store".
- [ ] Authentication with JWT and device access control with CORS.
## Considerations:
- ~~Using an ORM, like PrismaJS, to simplify the dev process.~~
- Using Expo Web to create the web application instead of ReactJS or SvelteKit.
## Specific Docs
- [Backend/Server](server/README.md)
- [Database](db/README.md)
- [Mobile Client](mobile/README.md)