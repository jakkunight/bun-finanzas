CREATE TABLE
	types (
		id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
		--remote INTEGER NOT NULL,
		type TEXT NOT NULL,
		description TEXT NOT NULL
	);

INSERT INTO
	types (remote, type, description)
VALUES
	(
		1,
		"INGRESO",
		"Es toda actividad que permite ganar dinero."
	),
	(
		1,
		"EGRESO",
		"Es toda actividad que implica un gasto de dinero."
	);