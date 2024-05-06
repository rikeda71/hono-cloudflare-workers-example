import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todos", {
	id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
	todo: text("todo").notNull(),
	isDone: integer("is_done", { mode: "boolean" }).notNull().default(false),
	deadline: integer("deadline_unixtime").notNull(),
	createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});
