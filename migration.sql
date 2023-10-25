/*psql -d test -f migration.sql */
/* if the table already exists don't create*/
CREATE TABLE IF NOT EXISTS Users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS Orders (
    id INT PRIMARY KEY,
    user_id INT REFERENCES Users(id),
    product VARCHAR(100),
    quantity INT
);

