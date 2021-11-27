-- NOTE: I figured we'd want this for the section on SQL
PRAGMA foreign_keys;

-- NOTE: For the SQL assignment, we could have them normalize
-- this database farther. Perhaps they can learn about SERIAL and
-- then go implement a way to change a room_name without losing
-- references by using a FOREIGN KEY into a rooms table with an 
-- int primary key.
CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	notes varchar NOT NULL
);

INSERT INTO songs(id, song_title, notes)
VALUES(2, 'Never Gonna Give You Up (Rick Astley)','A3 B1 D4 B1 F4 F4 E4 A3 B1 D4 B1 E4 E4 D4 C4 B1 A3 B1 D4 B1 D4 E4 C4 A3 A3 E4 D4');


/*INSERT INTO songs (id, song_title, notes) 
VALUES (1, 'Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4');
INSERT INTO songs(id, song_title, notes)
VALUES(2, 'Never Gonna Give You Up (Rick Astley)','A4 B4 D4 B4 F4 F4 E4 A4 B4 D4 B4 E4 E4 D4 C4 B4 A4 B4 D4 B4 D4 E4 C4 A4 A4 E4 D4');
*/
/*INSERT INTO songs VALUES
 (1, 'Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4'),
 (2, 'Never Gonna Give You Up (Rick Astley)','A4 B4 D4 B4 F4 F4 E4 A4 B4 D4 B4 E4 E4 D4 C4 B4 A4 B4 D4 B4 D4 E4 C4 A4 A4 E4 D4');
 */