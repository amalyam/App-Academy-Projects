-- Step 1
-- Run the SQL command that joins the bands and albums tables together, SELECTing both the name of the band and the album title.
-- JOIN the tables, matching FOREIGN KEYs to the corresponding PRIMARY KEY.
-- Your code here

SELECT bands.name, albums.title
FROM albums
    JOIN bands ON (albums.band_id = bands.id);
