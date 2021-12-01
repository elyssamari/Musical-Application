-- NOTE: I figured we'd want this for the section on SQL
PRAGMA foreign_keys;

-- NOTE: For the SQL assignment, we could have them normalize
-- this database farther. Perhaps they can learn about SERIAL and
-- then go implement a way to change a room_name without losing
-- references by using a FOREIGN KEY into a rooms table with an 
-- int primary key.

---CREATE TABLE songs (
---	id int NOT NULL PRIMARY KEY,
---	song_title text NOT NULL,
---	notes varchar NOT NULL
---);

CREATE TABLE newsongs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	artist_name text NOT NULL,
	genre_type text NOT NULL,
	notes varchar NOT NULL
);

INSERT INTO newsongs (id, song_title, notes) 
VALUES (1, 'Ode to Joy (Dubstep Remix)','Ludwig van Beethoven','Children','E4,4 E4,4 F4,4 G4,4 G4,4 F4,4 E4,4 D4,4 C4,4 C4,4 D4,4 E4,4 E4,4 D4,4 D4,4');

INSERT INTO newsongs (id, song_title, notes) 
VALUES (2, 'Dearly Beloved','Yoko Shimomura','Gaming', 'A4,2 E4,2 D4,2 B4,2 A4,2 E4,2 D4,2 B4,2 C5,2 B4,2 E5,2 D5,8 E5,8 D5,4 C5,2 B4,2 A4,2 G4,1 A4,2 E4,2 D4,2 B4,2 A4,2 E4,2 D4,2 B4,2 C5,2 B4,2 E5,2 D5,8 E5,8 D5,4 C5,2 B4,2 A4,2 G4,1 
A4,1 B4,4 G4,4 A4,2 E5,1 D5,2 E5,1 F5,4 G5,4 E5,4 D5,4 E5,1 A4,1 B4,4 G4,4 A4,2 E5,1 D5,2 C5,2 B4,4 A4,1 A4,1 B4,4 G4,4 A4,2 E5,1 D5,2 E5,1 F5,4 G5,4 E5,4 D5,4 E5,1 
A4,1 B4,4 G4,4 A4,2 E5,1 D5,2 C5,2 B4,4 A4,1 
A4,2 E4,2 D4,2 B4,2 A4,2 E4,2 D4,2 B4,2 C5,2 B4,2 E5,2 D5,8 E5,8 D5,4 C5,2 B4,2 A4,2 G4,1 A4,2 E4,2 D4,2 B4,2 A4,2 E4,2 D4,2 B4,2 C5,2 B4,2 E5,2 D5,8 E5,8 D5,4 C5,2 B4,2 A4,2 G4,1');

---https://musescore.com/user/582576/scores/2328876
INSERT INTO newsongs (id, song_title, notes) 
VALUES(3,'atla theme','Jeremy Zuckerman and Benjamin Wynn','E4,1 A4,2 G4,2 E4,1 A4,1 F4,1 C5,2 B4,2 F4,1 C5,1 E4,1 A4,2 G4,2 E4,1 A4,1 F4,1 C5,2 B4,2 G4,1 D5,2 C5,2 A4,1 C5,2 B4,2 A4,1 C5,2 B4,2 A4,1');

-- SQLite
INSERT INTO newsongs (id, song_title, artist_name, genre_type, notes)
VALUES (4,'pokemon?','a','a','A4,8 A4,8 A4,8 A4,4 A4,8 G4,4 E4,8 C4,3 D4,8 A4,4 A4,4 G4,8 F4,8 G4,1.5 Bb4,8 Bb4,8 Bb4,8 Bb4,4 B4,8 A4,4 G4,8 F4,3 G4,8 A4,4 A4,8 G4,4 F4,8 A4,1.5 A4,8 C5,8 D5,8 Bb4,16 Bb4,16 C5,8 D5,8 D5,8 C5,8 A4,8 G4,8 F4,4 D5,8 D5,8 E5,8 F5,8 E5,8');
DELETE FROM newsongs WHERE id = 4;

INSERT INTO newsongs (id, song_title, artist_name, genre_type, notes)
VALUES (5,'We Are','Hiroshi Kitadani','Theme','Bb4,16 Bb4,8 Eb5,16 Eb5,4 Bb4,4 Eb5,8 F5,2 Eb5,8 F5,6 Ab5,8 G5,4 Eb5,2 Ab4,16 Ab4,8 Bb4,16 Bb4,16 Bb4,16 Bb4,8 Eb5,16 Eb5,4 Bb4,4 Eb5,8 F5,4 F5,4 Ab5,4 G5,4 F5,8 Eb5,8');
DELETE FROM newsongs WHERE id = 5;

INSERT INTO newsongs (id, song_title, artist_name, genre_type, notes)
VALUES (6,'Overtaken','a','a','A4,4 A4,4 G4,4 r,4 G4,8 E4,8 C5,8 A4,8 r,2 A4,4 E5,4 D5,4 r,4 r,4 G4,8 A4,8 r,2 r,2');
DELETE FROM newsongs WHERE id = 6;

INSERT INTO newsongs (id, song_title, artist_name, genre_type, notes)
VALUES (7,'Spectacular Spider Man','The Tender Box','Theme','C5,8 C5,8 C5,8 C5,4 A5,8 A5,8 A5,8 A5,4 Db4,1 Db4,4 E4,4 G4,8 Ab4,8 G4,4 G4,4 Ab4,8 Db4,4 E4,4 Ab4,8 G4,4 G4,4 Ab4,8 Db4,4 E4,4 Ab4,8 G4,4 G4,4 Ab4,8 Db4,4 E4,4 Ab4,8 G4,4 G4,4 Ab4,8 G4,4 Ab4,8 Gb4,4 E4,8 G4,4 Gb4,4 E4,8 G4,4 Gb4,4 E4,8 Db4,4 Db4,4 E4,8 Gb4,4 Gb4,8 Gb4,4 E4,8 Db4,4 Db4,4 E4,8');
DELETE FROM newsongs WHERE id = 7;

INSERT INTO newsongs (id, song_title, artist_name, genre_type, notes)
VALUES (8,'Teen Titans','Andy Sturmer','Theme','E5,8 B4,8 E5,8 B4,8 Eb5,8 B4,8 Eb5,8 B4,8 D5,8 B4,8 D5,8 B4,8 Eb5,8 B4,8 Eb5,8 B4,8 E4,4 E4,4 G4,4 B4,4 A4,4 G4,4 E4,5 D4,8 E4,2 r,2 G5,8 G5,8 G5,8 E4,4 E4,4 G4,4 A4,4 B4,4 A4,4 G4,4 A4,8 B4,2 r,2 G5,8 G5,8 G5,8 E4,4 E4,4 G4,4 A4,8 B4,4 A4,4 G4,8 A4,8 B4,2 r,2 G5,8 G5,8 G5,8 E4,8 E4,8 D4,8 E4,4 D4,8 B3,8 A3,8 B3,4 r,8 E4,8 E4,8 D4,8 E4,4 D4,8 D4,8 B3,8 A3,8 B3,4 E4,8 E4,8 D4,8 E4,4 D4,8 F4,4 E4,4 D4,4 E4,4 Gb4,1 E4,8 G4,8 E4,4');
DELETE FROM newsongs WHERE id = 8;

INSERT INTO newsongs (id, song_title, artist_name, genre_type, notes)
VALUES (9,'Fight Together','Naoymt','Theme',
'Eb5,4 D5,4 Eb5,4 D5,4 F5,4 Eb5,4 D5,4 Eb5,4 Eb5,4 D5,4 Eb5,4 D5,4 F5,4 Eb5,4 D5,4 

Eb5,4 Eb5,4 D5,4 Eb5,4 D5,4 F5,4 Eb5,4 D5,4 Eb5,4 Eb5,4 D5,4 Eb5,4 Eb5,1 Eb4,8 Eb4,8 

C4,8 Eb4,4 Eb4,8 C4,8 Eb4,4 F4,8 G4,4 Ab4,4 G4,4 Eb4,8 Eb4,8 C4,8 Eb4,4 Eb4,8 C4,8 

Eb4,4 F4,8 G4,4 Ab4,4 G4,4 Eb4,2 C4,8 Eb4,8 G4,4 G4,8 F4,8 Eb4,8 F4,8 C4,8 Eb4,8 Eb4,2 

Bb5,4 G5,4 F5,4 G5,8 F5,4 Eb5,16 F5,8 G5,8 F5,8 Eb5,4 Bb5,8 G5,8 F5,8 F5,4 F5,8 Eb5,8 

F5,8 F5,8 Eb5,8 F5,4 G5,4 Eb5,4 Bb5,8 Bb5,8 G5,8 Bb5,4 Bb5,8 G5,8 Bb5,4 Bb5,8 Bb5,4 G5,8 

G5,8 Ab5,4 G5,4 Eb5,8 Eb5,8 Ab5,4 Ab5,8 G5,8 F5,8 Eb5,8 F5,8 Eb5,8 Eb5,1 r,1 C5,8 C5,8 

Bb4,8 C5,8 G4,8 F4,8 Eb4,8 F4,8 F4,8 Eb4,8 F4,4 G4,4 C4,8 C4,8 C4,8 Eb4,8 F4,8 Eb4,8 

G4,4 G4,8 F4,8 Eb4,8 Eb4,8 F4,8 C4,4 C5,8 C5,8 Bb4,8 C5,8 G4,8 F4,8 Eb4,8 F4,8 F4,8 

Eb4,8 G4,4 G4,8 G4,8 Ab4,4 G4,8 G4,8 F4,4 Eb4,8 Eb4,8 Bb4,4 Bb4,4 G4,8 G4,8 Ab4,8 Bb4,8 

Bb4,2 G4,8 Bb4,4 Ab4,4 G4,4 F4,4 Ab4,4 G4,4 F4,4 Eb4,4 F4,4 G4,4 G4,8 G4,8 Ab4,8 Bb4,8 

C5,4 Bb4,2 G4,8 Bb4,4 Ab4,4 G4,4 F4,4 Ab4,4 G4,4 F4,4 Eb4,4 Bb4,4 G4,4 F4,4 Eb4,8 F4,8 

Eb4,4 Eb4,4 D4,4 Eb4,4 D4,4 F4,4 Eb4,4 D4,4 Eb4,4 Eb4,4 D4,4 Eb4,4 D4,4 F4,4 Eb4,4 F4,4 

G4,2 G4,8 G4,8 F4,8 Eb4,8 Bb4,4 Bb4,4 Eb4,8 G4,4 Eb4,4 F4,4 Eb4,2 Eb5,2 F5,2 G5,2 Bb5,2 

G5,2 F5,2 Eb5,2 C5,2 Bb4,8 Bb4,8 Bb4,8 Bb5,4 G4,8 F5,8 Eb5,4 C6,4 Bb5,8 G5,8 F5,8 Eb5,8 

F5,8 G5,8 Ab5,4 G5,4 F5,4 Eb5,8 F5,8 Eb5,2 Bb4,8 Bb4,8 Bb4,8 Bb5,8 Ab5,8 Ab5,8 G5,8 G5,8

F5,8 F5,8 Eb5,2 Bb4,8 Bb4,8 Bb4,8 Bb5,8 Ab5,8 Ab5,8 G5,8 G5,8 F5,8 F5,8 Eb5,8 Eb5,2 G5,4

D5,4 Eb5,8 F5,4 G5,2 Bb5,4 C5,8 D5,4 C5,8 Bb5,8 C5,4 G5,8 Bb5,1 r,2 G4,8 G4,8 Ab4,8 

Bb4,8 Bb4,2 G4,8 Bb4,4 Ab4,4 G4,4 F4,4 Ab4,4 G4,4 F4,4 Eb4,4 F4,4 G4,4 G4,8 G4,8 Ab4,8 

Bb4,8 C5,4 Bb4,4 r,8 G4,8 Bb4,4 Ab4,4 G4,4 F4,4 Ab4,4 G4,4 F4,4 Eb4,4 Bb4,4 G4,4 F4,4 

Eb4,8 F4,8 Eb4,4 Eb4,4 D4,4 Eb4,4 D4,4 F4,4 Eb4,4 D4,4 Eb4,4 Eb4,4 D4,4 Eb4,4 D4,4 F4,4

Eb4,4 F4,4 G4,2 G4,8 G4,8 F4,8 Eb4,8 Bb4,4 Bb4,4 Eb4,8 G4,8 Eb4,8 F4,8 Eb4,1');
DELETE FROM newsongs WHERE id = 9;

INSERT INTO newsongs (id, song_title, artist_name, genre_type, notes)
VALUES (10,'Leaves From The Vine','Taylor Davis','Soundtrack',
'G5,3 G5,3 F4,5 E4,2 G5,3 G5,3 F4,5 E4,2 C4,3 E4,5 E4,5 E4,5 D4,5.5 C4,2');
DELETE FROM newsongs WHERE id = 10;

-- G5,2 G5,2 F4,4 E3,0.5 
-- G5,2 G5,2 F4,4 E3,0.5
-- D2,4 E3,4 E3,4 E3,4 D2,4 C1,0.5
-- E3,4 E3,4 E3,4 D2,4 C1,0.5
-- G5,4 G5,4 G5,4 F4,4 E3,0.5 
-- G5,2 G5,2 F4,4 E3,0.5
-- E3,4 E3,4 E3,4 D2,4 C1,0.5
-- E3,2 E3,2 D2,4 C1,0.5





-- SQLite
INSERT INTO newsongs (id, song_title, artist_name, genre_type, notes)
VALUES (5,'We Are','Hiroshi Kitadani','Theme','Eb5,4 F5,8 r,8 F5,8 r,8 G5,8 r,8 Eb5,8 r,8 F5,4 Eb5,8 F5,4 Eb5,1 r,1 Eb5,4 F5,8 r,8 F5,8 r,8 G5,8 r,8 Eb5,8 r,8 F5,4 Eb5,8 F5,4 Eb5,4 Gb5,4 A5,4 Ab5,4 Gb5,4 Eb5,1 G5,8 r,8 G5,8 r,8 F5,4 r,8 Eb5,4 F5,4 Eb5,8 F5,8 G5,8 r,8 G5,8 r,8 F5,4 r,8 Eb5,4 F5,8 r,8 Gb5,8 F5,8 E5,8 Eb5,8 r,8 G5,8 F5,4 r,8 Eb5,4 F5,4 Eb5,8 F5,8 G5,8 G5,2 Ab5,2 Db6,8 B5,8 Ab5,4 Bb4,8 Bb4,8 Eb5,8 Eb5,4 Bb4,4 Eb5,8 F5,2 Eb5,8 F5,8 Ab5,8 G5,8 Eb5,2 Ab4,16 Ab4,8 Bb4,16 Bb4,16 Bb4,16 Bb4,8 Eb5,16 Eb5,4 Bb4,4 Eb5,8 F5,4 F5,4 Ab5,4 G5,4 F5,8 Eb5,8 F5,8 Eb5,1 F5,4 Eb5,8 G5,8 F5,4 Eb5,4 F5,4 Eb5,8 F5,8 G5,8 r,8 G5,8 F5,4 Eb5,4 F5,8 Gb5,8 F5,8 Eb5,8 Ab4,8 Bb4,8 Ab4,8 G4,4 F4,4 Eb4,1 Db5,4 C5,4 Bb4,4 Ab4,4 Bb4,2 Bb4,8 Bb4,4 Ab4,8 G4,4 F4,4 Eb4,2 Eb4,4 F4,4 Gb4,2 Bb5,8 Ab4,8 Gb4,8 Ab4,1 Bb4,8 Bb4,16 Ab4,8 G4,4 F4,4 Eb4,2 Eb4,16 Eb4,8 Eb5,4 Eb5,4 F5,4 D5,8 Eb5,2 D5,8 D5,8 Eb5,4 Eb5,4 D5,4 C5,4 Bb4,4 G4,8 C5,4 F4,8 G4,8 Ab4,4 Bb4,4 G4,4 F4,8 Eb4,1 Bb4,4 C5,4 Db5,4 F5,8 F5,4 Eb5,4 Eb5,4 C5,8 Bb4,8 Ab4,4 Bb4,2 G4,8 F4,8 Eb4,2 Bb4,4 C5,4 Db5,4 F5,8 F5,4 E5,4 E5,4 F5,8 G5,4 Ab5,1 G5,8 Ab5,8 G5,8 Ab5,8 G5,8 F5,8 Eb5,8 F5,2 Gb5,8 Ab5,8 Bb5,2 Bb4,16 Bb4,8 Eb5,16 Eb5,2 Bb4,4 Eb5,8 F4,2 Eb5,8 F5,8 Ab5,8 G4,8 Eb5,1 Bb4,16 Bb4,16 Bb4,8 Eb5,16 Eb5,4 Bb4,4 Eb5,8 F5,4 F5,4 Ab5,4 G5,4 F5,8 Eb5,8 F5,8 Eb5,1 Eb5,16 Eb5,8 Eb5,4 Ab4,4 G5,4 F5,2 D5,4 D5,8 D5,8 D5,8 D5,8 C5,4 Bb4,4 C5,1 Ab4,4 Eb5,4 Bb4,4 F5,4 Eb5,8 F5,8 Gb5,1 Ab5,4 r,8 F5,8 Eb5,4');
DELETE FROM newsongs WHERE id = 5;

INSERT INTO newsongs (id, song_title, artist_name, genre_type, notes)
VALUES (7,'Spectacular Spider Man','The Tender Box','Theme','Db5,8 Db5,8 Db5,8 Db5,4 A4,8 A4,8 A4,8 A4,4 Ab4,8 Db4,0.5 Db4,4 E4,4 Ab4,8 G4,4 G4,4 Ab4,8 Db4,4 E4,4 Ab4,8 G4,4 G4,4 Ab4,8 Db4,4 E4,4 Ab4,8 G4,4 G4,4 Ab4,8 Db4,4 E4,4 Ab4,8 G4,4 G4,4 Ab4,8 G4,4 Ab4,8 Gb4,4 E4,8 G4,4 Gb4,4 E4,8 G4,4 Gb4,4 E4,8 Db4,4 Db4,4 E4,8 Gb4,4 Gb4,8 Gb4,4 E4,8 Db4,4 Db4,4 E4,8 Gb4,4 Ab4,8 Gb4,4 E4,8 Db4,4 B3,4 r,4 Db4,4 E4,4 Ab4,4 Gb4,2 Ab4,2 r,4 Db4,4 E4,4 Ab4,4 Gb4,4 E4,4 Db4,4 B3,4 Gb4,4 Gb4,8 Gb4,4 E4,8 Gb4,4 Gb4,4 E4,8 Gb4,4 Gb4,8 Gb4,4 E4,8 Db4,4 Db4,4 E4,8 Gb4,4 G4,8 Gb4,4 E4,8 Db4,4 Db4,8 Db4,4 E4,8 Gb4,4 G4,8 Gb4,4 E4,8 Db4,4 B3,4 r,8 Db4,4 E4,4 Ab4,4 Gb4,2 Ab4,2 r,8 Db4,4 E4,4 Ab4,4 Gb4,4 E4,4 Db4,4 B3,4 r,8 Gb4,4 Gb4,4 E4,8 G4,4 Gb4,4 Gb4,4 E4,8 G4,4 Gb4,4 E4,8 Db4,4 Gb4,4 Gb4,4 E4,8 G4,4 Gb4,4 Gb4,4 E4,8 G4,4 Gb4,4 E4,8 Db4,4 Gb4,4 Gb4,4 E4,8 G4,4 Gb4,4 Gb4,4 E4,8 G4,4 Gb4,4 E4,8 Db4,4 Gb4,4 Gb4,4 E4,8 G4,1 r,4 Db4,4 Db5,1 E5,4 Db5,4 Ab4,4 E4,4 G4,1 A4,2 Ab4,2 Db5,1 E5,4 Db5,4 Ab4,4 E4,4 G4,1 Gb4,4 Gb4,8 Gb4,4 E4,8 Gb4,4 E4,4 Db5,4 Db5,4 E5,4 Db5,4 Db4,4 Db4,4 Ab5,4 Db5,4 Db4,4 Db4,4 E5,4 Db5,4 Db4,4 Db4,4 B4,4 Db5,4 Db4,4 Db4,4 E5,4 Db5,4 Db4,4 Db4,4 Ab5,4 Db5,4 Db4,4 Db5,4 Db4,4 Db4,4 B4,2 B5,4 C6,4 Db6,4 Ab5,4 G5,4 E5,4 Db5,8 Db6,4 Ab5,4 G5,4 E5,4 Db5,8 Ab4,4 Gb4,4 E4,8 G4,4 Gb4,4 E4,8 G4,4 Ab4,8 Gb4,4 E4,8 Db4,4 Db4,4 E4,8 Gb4,4 Ab4,8 Gb4,4 E4,8 Db4,4 Db4,4 E4,8 Gb4,4 Ab4,8 Gb4,4 E4,8 Ab4,4 Gb4,4 r,8 Db4,4 E4,4 b4,4 Gb4,2 Ab4,2 r,8 Db4,4 E4,4 Ab4,4 Gb4,4 E4,4 Db4,4 B3,4 Gb4,4 Gb4,8 Gb4,4 E4,8 Gb4,4 Gb4,4 E4,4 Gb4,4 Gb4,8 Gb4,4 E4,8 Db4,4 Db4,4 E4,8 Gb4,4 G4,8 Gb4,4 E4,8 Db4,4 Db4,8 Db4,4 E4,8 Gb4,4 G4,8 Gb4,4 E4,8 Ab4,4 Gb4,4 r,8 Db4,4 E4,4 Ab4,4 Gb4,2 Ab4,2 r,8 Db4,4 E4,4 Ab4,4 Gb4,4 E4,4 Db4,4 B3,4 r,8 Gb4,4 Gb4,4 E4,8 G4,4 Gb4,4 Gb4,4 E4,8 G4,4 Gb4,4 E4,8 Db4,4 Gb4,4 Gb4,4 E4,8 G4,4 Gb4,4 Gb4,4 E4,8 G4,4 Gb4,4 E4,8 Db4,4 Gb4,4 Gb4,4 E4,8 G4,4 Gb4,4 Gb4,4 E4,8 G4,4 Gb4,4 E4,8 Db4,4 Gb4,4 Gb4,4 E4,8 G4,1 Db6,4 Ab5,4 G5,4 E5,4 Db5,8 Db6,4 Ab5,4 G5,4 E5,4 Db5,8 Db6,4 Ab5,4 G5,4 E5,4 Db5,8 Db6,4 Ab5,4 G5,4 E5,4 Db5,8 Gb4,4 Gb4,4 E4,8 G4,4 Gb4,4 Gb4,4 E4,8 Db4,4 Gb4,4 E4,8 Db4,4 Gb4,4 Gb4,4 E4,8 G4,4 Gb4,4 Gb4,4 E4,8 Db4,4 Gb4,4 E4,8 Db4,4 E4,4 Ab4,8 G4,4 G4,4 Ab4,8 Db4,4 E4,4 Ab4,8 G4,4 G4,4 Ab4,8 Db4,4 E4,4 Ab4,8 G4,4 G4,4 Ab4,8 Db4,4 E4,4 Ab4,8 G4,4 G4,4 Ab4,8 Db4,0.5');
DELETE FROM newsongs WHERE id = 7;

INSERT INTO newsongs (id, song_title, artist_name, genre_type, notes)
VALUES (4,'Pokemon','John Siegler and John Loeffler','Theme','A4,8 A4,8 A4,8 A4,4 A4,8 G4,4 E4,8 C4,2 C4,8 A4,4 A4,4 G4,8 F4,8 G4,4 r,4 F4,8 Bb4,4 Bb4,4 Bb4,8 A4,4 G4,4 F4,2 F4,8 A4,4 A4,8 G4,4 F4,8 A4,1 A4,8 A4,8 A4,8 A4,4 A4,8 G4,4 E4,8 C4,2 C4,8 A4,4 A4,4 G4,8 F4,8 G4,4 r,4 F4,8 Bb4,8 Bb4,8 Bb4,4 Bb4,8 A4,4 G4,4 F4,2 F4,8 A4,4 A4,8 G4,4 F4,8 A4,1 A4,8 C5,8 D5,8 r,8 A4,8 A4,8 C5,8 D5,4 D5,8 C5,8 A4,4 F4,2 r,8 C5,8 D5,8 E5,8 F5,8 E5,4 D5,4 C5,4 A4,8 C5,8 D5,8 D5,2 D5,8 C5,8 A4,4 F4,4 F4,8 G4,8 A4,4 A4,8 G4,4 F4,8 A4,2 A4,8 C6,8 D5,8 r,8 A4,8 A4,8 C5,8 D5,4 D5,4 C5,4 D5,4 C5,4 r,8 D5,8 D5,8 E5,8 F5,8 E5,4 D5,4 C5,2 Bb4,8 F5,4 F5,4 F5,4 C5,4 F5,4 F5,2 F5,4 F5,4 F5,8 E5,4 A4,8 A4,8 C5,8 D5,4 D5,4 A4,8 A4,8 C5,8 D5,4 F5,8 D5,4 A4,8 C5,8 D5,4 F5,8 D5,4 A4,8 C5,8 D5,2');
DELETE FROM newsongs WHERE id = 4;

INSERT INTO newsongs (id, song_title, artist_name, genre_type, notes)
VALUES (6,'Overtaken','Geek Music','Soundtrack','A3,4 A3,4 G3,4 r,4 G3,8 E3,8 C4,8 A3,4 r,2 A3,4 E4,4 D4,4 r,2 G3,8 A3,8 r,1 F5,1 Gb5,8 G5,8 r,4 Eb5,16 Eb5,16 r,4 Eb4,8 E4,16 Eb4,16 r,4 G5,16 G5,16 E5,8 r,8 r,2 A4,4 A4,4 G4,4 r,4 G4,8 E4,8 C5,8 A4,4 r,2 A4,4 E5,4 D5,4 r,2 G4,8 A4,8 r,1 E4,8 Gb4,8 G4,8 B4,8 A4,4 Gb4,8 G4,4 Gb4,4 r,2 E4,8 Gb4,8 G4,8 A4,8 D5,8 C5,4 E5,8 Eb5,2 C5,16 Eb5,16 E5,16 E5,16 E5,16 E5,16 E5,16 E5,16 E5,16 E5,16 E5,16 E5,16 E5,16 E5,16 E5,16 E5,16 E5,16 E5,16 A4,4 A4,4 G4,4 r,4 G4,8 E4,8 C5,8 A4,8 r,2 A4,4 E5,4 G5,4 E5,8 D4,2 r,4 C5,8 D5,8 E5,8 A4,8 A4,8 E5,8 E5,2 D5,8 G4,8 G4,8 D5,8 D5,2 r,4 C5,8 B4,8 A4,8 G4,8 A4,8 r,1 E4,8 G4,8 Ab4,8 A4,4 G4,4 E4,8 D4,4 Eb4,8 E4,8 r,2 A3,16 B3,16 D4,16 C4,16 E4,16 G4,16 Gb4,16 A4,16 D5,16 E5,16 A4,4 B4,16 C5,16 D5,16 Eb5,16 D5,16 C5,16 B4,16 C5,16 Eb5,16 G5,16 A5,16 r,8 E5,16 E5,16 D5,16 Eb5,16 E5,16 F5,16 Gb5,16 Eb4,4 D4,8 Db4,8 G5,8 Eb4,16 F4,16 Gb4,16 F4,16 Eb4,8 C4,16 D4,16 Eb4,16 D4,16 C4,8 A3,16 B3,16 C4,16 B3,16 A3,8 r,1 A3,16 B3,16 C4,16 D4,16 E4,16 C4,16 E4,16 G4,16 Gb4,16 A4,16 D5,16 G4,16 A4,4 B4,16 C5,16 D5,16 Eb5,16 D5,16 C5,16 B4,16 C5,16 D5,16 Eb5,16 F5,16 Gb5,16 F5,16 Eb5,4 F5,16 Gb5,16 Ab5,16 A5,16 Ab5,16 A5,16 B5,16 C6,16 B5,16 C6,16 D6,16 Eb6,4 E6,1 A4,4 A4,4 G4,4 r,4 G4,8 E4,8 C5,8 A4,8 r,2 A4,4 E5,4 G5,4 E5,8 D5,2 C5,8 D5,8 E5,8 A4,8 A4,8 E5,8 E5,2 D5,8 G4,8 G4,8 D5,8 D5,2 r,8 C5,8 B4,8 A4,8 G4,8 A4,8 r,1 E4,8 G4,8 Ab4,8 A4,4 G4,4 E4,8 D4,4 Eb4,8 E4,2 A4,4 A4,4 G4,4 r,4 G4,8 E4,8 C5,8 A4,8 r,2 A5,4 A5,4 G5,4 r,4 G5,8 E5,8 C6,8 A5,8');
DELETE FROM newsongs WHERE id = 6;

INSERT INTO newsongs (id, song_title, artist_name, genre_type, notes)
VALUES (8,'Teen Titans','Andy Sturmer','Theme','E5,8 B4,8 E5,8 B4,8 Eb5,8 B4,8 Eb5,8 B4,8 D5,8 B4,8 D5,8 B4,8 Eb5,8 B4,8 Eb5,8 B4,8 E4,4 E4,4 G4,4 B4,4 A4,4 G4,4 E4,4 D4,8 E4,2 r,4 G5,4 G5,8 G5,4 r,8 E4,4 E4,4 G4,4 A4,4 B4,4 A4,4 G4,4 A4,8 B4,2 r,4 G5,4 G5,8 G5,4 r,8 A4,8 G4,8 A4,4 G4,4 E4,8 E4,8 D4,8 E4,8 r,8 A4,8 G4,8 A4,4 G4,4 E4,8 E4,8 D4,8 E4,8 r,8 E4,8 A4,8 G4,8 A4,4 D4,4 Bb4,4 A4,4 G4,4 B4,1 E4,4 G4,8 E4,4 E5,4 E5,8 E5,8 G5,8 A5,4 Bb5,4 A5,8 G5,8 A5,8 G5,4 E4,4 E4,4 G4,4 B4,8 A4,4 G4,4 E4,8 D4,8 E4,4 r,4 G5,4 G5,8 G5,4 r,8 E4,4 E4,4 G4,4 A4,8 B4,4 A4,8 G4,8 A4,8 B4,4 r,4 G5,4 G5,8 G5,4 r,8 B3,8 E4,8 D4,8 E4,4 D4,8 B3,8 A3,8 B3,4 B3,8 E4,8 D4,8 E4,4 D4,8 D4,8 B3,8 A3,8 B3,4 B3,8 E4,8 D4,8 E4,4 D4,8 F4,4 E4,4 D4,4 E4,4 Gb4,1 E4,4 G4,8 E4,4 E5,4 E5,8 E5,8 G5,8 A5,4 G5,8 Bb5,4 A5,8 G5,8 A5,8 G5,8 E5,8 D5,8 E5,8 E5,8 E5,8 E5,8 E5,8');
DELETE FROM newsongs WHERE id = 8;
-- INSERT INTO songs(id, song_title, notes)
-- VALUES(2, 'Never Gonna Give You Up (Rick Astley)','A3 B1 D4 B1 F4 F4 E4 A3 B1 D4 B1 E4 E4 D4 C4 B1 A3 B1 D4 B1 D4 E4 C4 A3 A3 E4 D4');
-- INSERT INTO songs (id, song_title, notes) 
-- VALUES (3, 'Dearly Beloved', 'A4 E4 D4 B4 A4 E4 D4 B4 C5 B4 E5 D5 E5 D5 C5 B4 A4 G4');

/*INSERT INTO songs(id, song_title, notes)
VALUES(2, 'Never Gonna Give You Up (Rick Astley)','A4 B4 D4 B4 F4 F4 E4 A4 B4 D4 B4 E4 E4 D4 C4 B4 A4 B4 D4 B4 D4 E4 C4 A4 A4 E4 D4');
*/
/*INSERT INTO songs VALUES
 (1, 'Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4'),
 (2, 'Never Gonna Give You Up (Rick Astley)','A4 B4 D4 B4 F4 F4 E4 A4 B4 D4 B4 E4 E4 D4 C4 B4 A4 B4 D4 B4 D4 E4 C4 A4 A4 E4 D4');
 */