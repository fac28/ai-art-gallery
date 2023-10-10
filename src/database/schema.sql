PRAGMA foreign_keys = ON;

BEGIN;

CREATE TABLE IF NOT EXISTS images (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  image_file BLOB NOT NULL
);

CREATE TABLE IF NOT EXISTS image_details (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  description VARCHAR(255),
  created_at TIMESTAMP,
  image_id INTEGER,
  uploaded_by VARCHAR(255),
  FOREIGN KEY (image_id) REFERENCES images (id)
);

COMMIT;
