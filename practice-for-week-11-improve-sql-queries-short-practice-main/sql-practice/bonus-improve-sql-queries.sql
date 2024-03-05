----------
-- Step 0 - Create a Query
----------
-- Query: Find a count of `toys` records that have a price greater than
-- 55 and belong to a cat that has the color "Olive".

-- As a subquery
-- SELECT COUNT(toys.id) AS above_55_olive_cat_toys
-- FROM toys
-- WHERE
--     price > 55
--     AND id IN (
--         SELECT toy_id
--         FROM cat_toys
--         WHERE
--             cat_id IN (
--                 SELECT id
--                 FROM cats
--                 WHERE
--                     color = "Olive"
--             )
--     );

-- OR with JOIN
-- SELECT COUNT(toys.id) AS above_55_olive_cat_toys
-- FROM cats
--     JOIN cat_toys ON cats.id = cat_toys.cat_id
--     JOIN toys ON cat_toys.toy_id = toys.id
-- WHERE
--     cats.color = "Olive"
--     AND toys.price > 55;

-- Paste your results below (as a comment):
-- 215

----------
-- Step 1 - Analyze the Query
----------
-- Query:
-- EXPLAIN QUERY PLAN
-- SELECT COUNT(toys.id) AS above_55_olive_cat_toys
-- FROM cats
--     JOIN cat_toys ON cats.id = cat_toys.cat_id
--     JOIN toys ON cat_toys.toy_id = toys.id
-- WHERE
--     cats.color = "Olive"
--     AND toys.price > 55;

-- Paste your results below (as a comment):
-- QUERY PLAN
--SCAN cat_toys
--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)
--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
-- What do your results mean?
-- Was this a SEARCH or SCAN?
-- What does that mean?

----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):
-- same as above
-- Paste your results below (as a comment):
-- Run Time: real 0.103 user 0.013351 sys 0.019245
----------
-- Step 3 - Add an index and analyze how the query is executing
----------
-- Create index:
-- CREATE INDEX idx_toys_price ON toys (price);

-- CREATE INDEX idx_cats_color ON cats (color);
-- Analyze Query:
-- SELECT COUNT(toys.id) AS above_55_olive_cat_toys
-- FROM cats
--     JOIN cat_toys ON cats.id = cat_toys.cat_id
--     JOIN toys ON cat_toys.toy_id = toys.id
-- WHERE
--     cats.color = "Olive"
--     AND toys.price > 55;
-- Paste your results below (as a comment):
-- Run Time: real 0.012 user 0.010317 sys 0.000832
-- Analyze Results:
-- Is the new index being applied in this query?
-- Yes, seems to have reduced the time
----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):
CREATE INDEX idx_cat_toys_cat_id_toy_id ON cat_toys (cat_id, toy_id);

SELECT COUNT(toys.id) AS above_55_olive_cat_toys
FROM cats
    JOIN cat_toys ON cats.id = cat_toys.cat_id
    JOIN toys ON cat_toys.toy_id = toys.id
WHERE
    cats.color = "Olive"
    AND toys.price > 55;
-- Paste your results below (as a comment):
-- Run Time: real 0.012 user 0.001275 sys 0.001723
-- Analyze Results:

-- Are you still getting the correct query results?
-- Did the execution time improve (decrease)?
-- Do you see any other opportunities for making this query more efficient?

-- It only seems to have reduced the user time result
---------------------------------
-- Notes From Further Exploration
---------------------------------
