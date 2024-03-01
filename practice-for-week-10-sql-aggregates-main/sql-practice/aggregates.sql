-- 1
SELECT COUNT(*) AS num_cats FROM cats;

-- 2
SELECT name, MIN(birth_year) FROM cats;

SELECT name, MAX(birth_year) FROM cats;

SELECT (
        SELECT name
        FROM cats
        ORDER BY birth_year DESC
        LIMIT 1
    ) AS "Youngest Cat Name", (
        SELECT birth_year
        FROM cats
        ORDER BY birth_year DESC
        LIMIT 1
    ) AS "Youngest Cat Birth Year", (
        SELECT name
        FROM cats
        ORDER BY birth_year ASC
        LIMIT 1
    ) AS "Oldest Cat Name", (
        SELECT birth_year
        FROM cats
        ORDER BY birth_year ASC
        LIMIT 1
    ) AS "Oldest Cat Birth Year";

-- BONUS

-- 1 Write a query to list the number of toys per cat.
SELECT cats.name, COUNT(*)
FROM toys
    JOIN cats ON (cat_id = cats.id)
GROUP BY
    cats.name;

-- 2 Write a query to determine which cats have been "spoiled" with two or more toys.

SELECT cats.name, COUNT(*) AS num_toys
FROM toys
    JOIN cats ON (cat_id = cats.id)
GROUP BY
    cats.name
HAVING
    num_toys >= 2;
