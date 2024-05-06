# hono-cloudflare-workers-example
Example PJ of Cloudflare Workers with Hono.js (For Personal Development)

## Setup This Repo Steps

1. `npm create cloudflare@latest .`
    - Use `"Hello World" Worker`
    - Use `TypeScript`
2. `npx wrangler d1 create hono-cloudflare-workers-example` and copy `d1_databases` settings to `wrangler.toml`
3. remove `.editorconfig` and `.prettierrc`
4. `npm install -D --save-exact @biomejs/biome` and `npx @biomejs/biome init`
    - ref. https://biomejs.dev/ja/guides/getting-started/
5. `npm install drizzle-orm` and `npm install -D drizzle-kit`
6. `npx wrangler d1 execute hono-cloudflare-workers-example --local --file=db/dummy.sql`
7. `npm install hono`
