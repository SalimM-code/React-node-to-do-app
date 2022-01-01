DROP TABLE IF EXISTS todos CASCADE;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  name varchar,
  completed boolean,
  created_at timestamp,
  user_id integer REFERENCES users(id) ON DELETE CASCADE DEFAULT NULL
);