INSERT INTO Users (id, name, email) VALUES
(1, 'John Doe', 'john.doe@example.com'),
(2, 'Jane Doe', 'jane.doe@example.com'),
(3, 'Alice', 'alice@example.com'),
(4, 'Bob', 'bob@example.com'),
(5, 'Charlie', 'charlie@example.com');

INSERT INTO Orders (id, user_id, product, quantity) VALUES
(1, 1, 'Product 1', 2),
(2, 1, 'Product 2', 1),
(3, 2, 'Product 3', 5),
(4, 2, 'Product 4', 3),
(5, 3, 'Product 5', 1),
(6, 3, 'Product 6', 2),
(7, 4, 'Product 7', 1),
(8, 4, 'Product 8', 1),
(9, 5, 'Product 9', 3),
(10, 5, 'Product 10', 2);


/* psql -d your_database_name -f seed.sql */
