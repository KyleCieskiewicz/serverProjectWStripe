SELECT * FROM users
JOIN orders ON users.orderid = orders.orderid
WHERE users.email = users.email;