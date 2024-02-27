-- Step 2
-- Retrieve the names of the bands and the titles of their albums that were released in the year 2020.
-- A WHERE clause can filter across any JOINed table, even if it's not in the
-- final output of what is being SELECTed for.
-- Your code here

SELECT bands.name, albums.title
FROM albums
    JOIN bands ON albums.band_id = bands.id
WHERE
    albums.year = 2020;
