-- join tables with all columns
SELECT * FROM toys JOIN cats ON (cats.id = toys.cat_id);

-- 1 Replace JOIN query with subquery
-- Write a JOIN query to get the list of toys belonging to Garfield.
SELECT toys.name
FROM toys
    JOIN cats ON (cats.id = toys.cat_id)
WHERE
    cats.name = "Garfield";

-- Rewrite the JOIN query using a subquery instead.
SELECT name
FROM toys
WHERE
    cat_id IN (
        SELECT id
        FROM cats
        WHERE
            name = "Garfield"
    );

-- 2 Dynamic INSERT using subquery
-- Give Garfield a new toy named "Pepperoni" using a subquery for Garfield's id.
INSERT INTO
    toys (name, cat_id)
VALUES (
        "Pepperoni", (
            SELECT id
            FROM cats
            WHERE
                name = "Garfield"
        )
    );
-- Verify the insertion worked using one of the queries above.

-- BONUS
-- 1. Dynamic INSERT using subquery with multiple insertions
-- Give all cats born before the year 2013 a new toy named "Cat Bed" using a subquery.
INSERT INTO
    toys (name, cat_id)
SELECT "Cat Bed", id
FROM cats
WHERE
    birth_year < 2013;

-- Verify the insertion created a new toy named "Cat Bed" for the cats "Tiger", "Oscar", and "Garfield".

-- SELECT cats.name, toys.name
-- FROM cats
--     JOIN toys ON cats.id = toys.cat_id
-- WHERE
--     cats.name IN ("Tiger", "Oscar", "Garfield")
--     AND toys.name = "Cat Bed";

SELECT cats.name, toys.name
FROM cats, (
        SELECT cat_id, name
        FROM toys
        WHERE
            name = "Cat Bed"
    ) as toys
WHERE
    cats.id = toys.cat_id
    AND cats.name IN (
        SELECT name
        FROM cats
        WHERE
            name IN ("Tiger", "Oscar", "Garfield")
    );

-- Phase 2: Backup the tables using subquery
--  backup cats in cats_backup
INSERT INTO
    cats_backup (name, birth_year)
SELECT name, birth_year
FROM cats;

-- backup toys in toys_backup
INSERT INTO toys_backup (name, cat_id) SELECT name, cat_id FROM toys;
