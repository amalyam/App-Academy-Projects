-- 1
INSERT INTO
    customers (name, phone)
VALUES ('Rachel', '111-111-1111');

-- 2
UPDATE customers
SET
    points = points + 1
WHERE
    phone = '111-111-1111';

INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
-- 3
INSERT INTO
    customers (name, email, phone)
VALUES (
        "Monica", "monica@friends.show", "222-222-2222"
    ),
    (
        "Phoebe", "phoebe@friends.show", "333-333-3333"
    );

-- 4
UPDATE customers
SET
    points = points + 3
WHERE
    phone = "333-333-3333";

INSERT INTO
    coffee_orders (customer_id)
VALUES (3),
    (3),
    (3);

-- 5
UPDATE customers
SET
    points = points + 4
WHERE
    phone = '111-111-1111';

INSERT INTO
    coffee_orders (customer_id)
VALUES (1),
    (1),
    (1),
    (1);

UPDATE customers
SET
    points = points + 4
WHERE
    phone = "222-222-2222";

INSERT INTO
    coffee_orders (customer_id)
VALUES (2),
    (2),
    (2),
    (2);

-- 6
SELECT points FROM customers WHERE phone = "222-222-2222";

-- 7
SELECT points FROM customers WHERE phone = "111-111-1111";

UPDATE customers
SET
    points = points - 10
WHERE
    phone = "111-111-1111";

INSERT INTO
    coffee_orders (is_redeemed, customer_id)
VALUES ("redeemed", 1);

--  8
INSERT INTO
    customers (name, email)
VALUES ("Joey", "joey@friends.show"),
    (
        "Chandler", "chandler@friends.show"
    ),
    ("Ross", "ross@friends.show");

-- 9

UPDATE customers
SET
    points = points + 6
WHERE
    email = "ross@friends.show";

INSERT INTO
    coffee_orders (customer_id)
VALUES (6),
    (6),
    (6),
    (6),
    (6),
    (6);

UPDATE customers
SET
    points = points + 3
WHERE
    phone = '222-222-2222';

INSERT INTO coffee_orders (customer_id) VALUES (2), (2), (2);

-- 15
DELETE FROM customers WHERE email = "chandler@friends.show";

-- 18
UPDATE customers
SET
    email = "p_as_in_phoebe@friends.show"
WHERE
    phone = "333-333-3333"
