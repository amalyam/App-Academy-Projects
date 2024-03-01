-- Find All the Toys for Hermione's cats

-- With 3 joins:
-- SELECT toys.name
-- FROM
--     toys
--     JOIN cats ON (toys.cat_id = cats.id)
--     JOIN cat_owners ON (cats.id = cat_owners.cat_id)
--     JOIN owners ON (
--         cat_owners.owner_id = owners.id
--     )
-- WHERE
--     owners.first_name = "Hermione";

-- With 2 joins:
SELECT toys.name
FROM toys
    JOIN cat_owners ON (
        toys.cat_id = cat_owners.cat_id
    )
    JOIN owners ON (
        cat_owners.owner_id = owners.id
    )
WHERE
    owners.first_name = "Hermione";
