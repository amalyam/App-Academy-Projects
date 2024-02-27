-- Step 2
-- Just like with one-to-many relationships, you can filter one table by any
-- associated data on a conected table.
-- Run the SQL command that selects the first and last name of each musician that plays the piano.

SELECT musicians.first_name, musicians.last_name, instruments.type
FROM
    musicians
    JOIN musician_instruments ON (
        musicians.id = musician_instruments.musician_id
    )
    JOIN instruments ON musician_instruments.instrument_id = instruments.id
WHERE
    instruments.type = "piano";
