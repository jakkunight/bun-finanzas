CREATE TABLE
	transactions (
		id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
		remote INTEGER NOT NULL,
		creation_date TEXT NOT NULL,
		last_update TEXT NOT NULL,
		date TEXT NOT NULL,
		user INTEGER NOT NULL,
		amount REAL NOT NULL,
		concept INTEGER NOT NULL
	);