CREATE TABLE
	users (
		id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
		remote INTEGER NOT NULL,
		creation_date TEXT NOT NULL,
		last_update TEXT NOT NULL,
		username TEXT NOT NULL,
		email TEXT NOT NULL,
		password TEXT NOT NULL,
		currency TEXT NOT NULL,
		balance REAL NOT NULL
	);