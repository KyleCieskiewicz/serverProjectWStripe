INSERT INTO users (firstname, lastname, email, address) VALUES ($1, $2, $3, $4)
RETURNING *;