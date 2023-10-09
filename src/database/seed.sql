--
-- Used to add example values to the DB
--

-- Required, otherwise inserting products breaks categories references
PRAGMA foreign_keys = OFF;

BEGIN;

INSERT INTO images VALUES
  (1, 'image_file'),
  (2, 'image_file'),
  (3, 'image_file'),
  (4, 'image_file'),
  (5, 'image_file')

ON CONFLICT DO NOTHING;

INSERT INTO image_details (id, description, created_at, image_id, uploaded_by) VALUES
  (1, 'A beautiful picture of a sunset with lots of smiles and happinenss', '2023-01-01 12:00:00', 1, 'Susie Woosie'),
  (2, 'Gweneth Paltro at night being spooky in the road', '2023-01-01 12:00:00', 2, 'GwenXXX'),
  (3, 'Barack Obama dancing', '2023-01-01 12:00:00', 3, 'POTUS_Hehe'),
  (4, 'Four otters crossed with a giraffe', '2023-01-01 12:00:00', 4, 'AnimalCrosser'),
  (5, 'Dream city where roads are rivers and rivers are seas', '2023-01-01 12:00:00', 5, 'NatureGal')
ON CONFLICT DO NOTHING;

COMMIT;

PRAGMA foreign_keys = ON;
