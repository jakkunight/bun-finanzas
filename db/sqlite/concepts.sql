CREATE TABLE
	concepts (
		id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
		remote INTEGER NOT NULL,
		last_update TEXT NOT NULL,
		concept TEXT NOT NULL,
		type INTEGER NOT NULL,
		description TEXT NOT NULL,
		user INTEGER NOT NULL
	);