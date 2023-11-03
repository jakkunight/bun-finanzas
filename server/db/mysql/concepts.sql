CREATE TABLE concepts(
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	user INTEGER NOT NULL,
	type INTEGER NOT NULL,
	title TEXT NOT NULL,
	description TEXT NOT NULL
);

INSERT INTO concepts
	(user, type, title, description)
VALUES
	(1, 2, "Transport", ""),
	(1, 2, "Food", ""),
	(1, 2, "Taxes", ""),
	(1, 2, "Debts", ""),
	(1, 2, "Electricity", ""),
	(1, 2, "Current Water", ""),
	(1, 2, "Comunication", ""),
	(1, 2, "Health and Self-care", ""),
	(1, 2, "Other Bills", "");
