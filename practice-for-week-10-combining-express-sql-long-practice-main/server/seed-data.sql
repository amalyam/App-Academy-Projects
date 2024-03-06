-- BASIC PHASE 1A - DROP and CREATE table
DROP TABLE IF EXISTS trees;

-- BASIC PHASE 1B - INSERT seed data

CREATE Table trees (
    id INTEGER PRIMARY KEY AUTOINCREMENT, tree VARCHAR(32), location VARCHAR(64), height_ft DECIMAL(3, 1), ground_circumference_ft DECIMAL(3, 1)
);

INSERT INTO
    trees (
        tree, location, height_ft, ground_circumference_ft
    )
VALUES (
        "General Sherman", "Sequoia National Park", 274.9, 102.6
    ),
    (
        "General Grant", "Kings Canyon National Park", 268.1, 107.5
    ),
    (
        "President", "Sequoia National Park", 240.9, 93.0
    ),
    (
        "Lincoln", "Sequoia National Park", 255.8, 98.3
    ),
    (
        "Stagg", "Private Land", 243.0, 109.0
    );
