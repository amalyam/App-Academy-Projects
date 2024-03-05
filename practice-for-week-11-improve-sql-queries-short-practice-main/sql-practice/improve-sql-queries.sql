----------
-- Step 0 - Create a Query
----------
-- Query: Select all cats that have a toy with an id of 5

-- using JOIN
-- SELECT cats.name, toys.name
-- FROM cats
--     JOIN cat_toys ON (cats.id = cat_toys.cat_id)
--     JOIN toys ON (cat_toys.toy_id = toys.id)
-- WHERE
--     toys.id = 5;

-- OR as a subquery

-- SELECT cats.name, (
--         SELECT toys.name
--         FROM toys
--         WHERE
--             toys.id = cat_toys.toy_id
--     )
-- FROM cats, cat_toys
-- WHERE
--     cats.id = cat_toys.cat_id
--     AND cat_toys.toy_id = 5;

-- Paste your results below (as a comment):
-- Rachele|Shiny Mouse
-- Rodger|Shiny Mouse
-- Jamal|Shiny Mouse
----------
-- Step 1 - Analyze the Query
----------
-- Query:
-- EXPLAIN QUERY PLAN
-- SELECT cats.name, toys.name
-- FROM cats
--     JOIN cat_toys ON (cats.id = cat_toys.cat_id)
--     JOIN toys ON (cat_toys.toy_id = toys.id)
-- WHERE
--     toys.id = 5;

-- Paste your results below (as a comment):

-- QUERY PLAN
--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
--SCAN cat_toys
--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

-- What do your results mean?
-- Was this a SEARCH or SCAN?
-- What does that mean?

--  The `SEARCH` lines indicate that sqlite will perform a search operation using the id primary key of each table.
--  The `SCAN` line indicate the sqlite will perform a full table scan on cat_toys, which seems necessary because the cat_toys table is being joined with both cats and toys
-- sqlite will first find the toy with an id of 5 by SEARCHing the toys TABLE
-- it will then SCAN the cat_toys table to find all rows with that toy id
-- finally, sqlite will look up the corresponding cats using the cat ids from the cat_toys table

----------
-- Step 2 - Time the Query to get a baseline
----------

-- Query (to be used in the sqlite CLI):
-- .timer on
-- SELECT cats.name, toys.name
-- FROM cats
--     JOIN cat_toys ON (cats.id = cat_toys.cat_id)
--     JOIN toys ON (cat_toys.toy_id = toys.id)
-- WHERE
--     toys.id = 5;
-- Paste your results below (as a comment):
--  Run Time: real 0.004 user 0.002183 sys 0.000755

-- or

-- SELECT cats.name, (
--         SELECT toys.name
--         FROM toys
--         WHERE
--             toys.id = cat_toys.toy_id
--     )
-- FROM cats, cat_toys
-- WHERE
--     cats.id = cat_toys.cat_id
--     AND cat_toys.toy_id = 5;
-- Run Time: real 0.003 user 0.001867 sys 0.000621
----------
-- Step 3 - Add an index and analyze how the query is executing
----------
-- Create index:
CREATE INDEX idx_cat_toys_cat_id ON cat_toys (cat_id);

CREATE INDEX idx_cat_toys_toy_id ON cat_toys (toy_id);

-- Analyze Query:
SELECT cats.name, (
        SELECT toys.name
        FROM toys
        WHERE
            toys.id = cat_toys.toy_id
    )
FROM cats, cat_toys
WHERE
    cats.id = cat_toys.cat_id
    AND cat_toys.toy_id = 5;

-- using JOIN
-- SELECT cats.name, toys.name
-- FROM cats
--     JOIN cat_toys ON (cats.id = cat_toys.cat_id)
--     JOIN toys ON (cat_toys.toy_id = toys.id)
-- WHERE
--     toys.id = 5;
-- Paste your results below (as a comment):
-- Run Time: real 0.014 user 0.008650 sys 0.003198
-- Run Time: real 0.015 user 0.008965 sys 0.002686

-- subquery results
-- Rachele|Shiny Mouse
-- Rodger|Shiny Mouse
-- Jamal|Shiny Mouse
-- Run Time: real 0.002 user 0.000161 sys 0.000202

-- JOIN results:
-- Rachele|Shiny Mouse
-- Rodger|Shiny Mouse
-- Jamal|Shiny Mouse
-- Run Time: real 0.002 user 0.000391 sys 0.000742

-- Analyze Results:
-- Is the new index being applied in this query?
-- The new index is being applied, but it seems to actually slow down the query

----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

CREATE INDEX idx_cat_toys_cat_name ON cats (name);

SELECT cats.name, (
        SELECT toys.name
        FROM toys
        WHERE
            toys.id = cat_toys.toy_id
    )
FROM cats, cat_toys
WHERE
    cats.id = cat_toys.cat_id
    AND cat_toys.toy_id = 5;

-- Results:
-- Rachele|Shiny Mouse
-- Rodger|Shiny Mouse
-- Jamal|Shiny Mouse
-- Run Time: real 0.003 user 0.001720 sys 0.000572

-- Analyze Results:
-- Are you still getting the correct query results?
-- Did the execution time improve (decrease)?
-- Do you see any other opportunities for making this query more efficient?
---------------------------------
-- Notes From Further Exploration
---------------------------------
