-- Find the first and last names of the owner whose cats are born after the year 2015

SELECT first_name, last_name
FROM owners
    JOIN cat_owners ON (
        owners.id = cat_owners.owner_id
    )
    JOIN cats ON (cats.id = cat_owners.cat_id)
WHERE
    cats.birth_year > 2015;
