CREATE TABLE `todos` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`todo` text NOT NULL,
	`is_done` integer DEFAULT false NOT NULL,
	`deadline_unixtime` integer NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
