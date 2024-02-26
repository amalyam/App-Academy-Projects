PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(40) NOT NULL, phone NUMBER (10, 0) UNIQUE, email VARCHAR(255) UNIQUE, points INTEGER NOT NULL DEFAULT 5, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS coffee_orders;

CREATE TABLE coffee_orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT, is_redeemed BOOLEAN DEFAULT 0, ordered_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, customer_id INT NOT NULL, FOREIGN KEY (customer_id) REFERENCES customers (id)
);