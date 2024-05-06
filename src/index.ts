import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { todos } from "../db/schema";
import { eq } from "drizzle-orm";

const app = new Hono<{ Bindings: Bindings }>().basePath("/api");

app.get("/todos/:id", async (context) => {
	const id = Number.parseInt(context.req.param("id"));
	try {
		const db = drizzle(context.env.DB);
		const results = await db.select().from(todos).where(eq(todos.id, id));
		return context.json(results, 200);
	} catch (error) {
		return context.json({ error: error }, 500);
	}
});

app.get("/todos", async (context) => {
	try {
		const db = drizzle(context.env.DB);
		const results = await db.select().from(todos);
		return context.json(results, 200);
	} catch (error) {
		return context.json({ error: error }, 500);
	}
});

app.post("/todos", async (context) => {
	const todo = await context.req.json<typeof todos.$inferInsert>();
	try {
		const db = drizzle(context.env.DB);
		await db.insert(todos).values(todo);
		return context.json({ message: "Success." }, 201);
	} catch (error) {
		return context.json({ error: error }, 500);
	}
});

app.put("/todos/:id", async (context) => {
	const id = Number.parseInt(context.req.param("id"));
	const { todo, isDone, deadline } =
		await context.req.json<typeof todos.$inferInsert>();
	try {
		const db = drizzle(context.env.DB);
		await db
			.update(todos)
			.set({ todo, isDone, deadline })
			.where(eq(todos.id, id));
		return context.json({ message: "Success." }, 201);
	} catch (error) {
		return context.json({ error: error }, 500);
	}
});

app.delete("/todos/:id", async (context) => {
	const id = Number.parseInt(context.req.param("id"));
	try {
		const db = drizzle(context.env.DB);
		await db.delete(todos).where(eq(todos.id, id));
		return context.json({ message: "Success." }, 201);
	} catch (error) {
		return context.json({ error: error }, 500);
	}
});

export default app;
