UPDATE users
SET firstname = $1, lastname = $2, address = $3
WHERE email = $4
RETURNING *;