INSERT INTO orders (proteinbase, vegetable, fruit, size, twoweeksorder) VALUES ($1, $2, $3, $4, $5)
RETURNING *;