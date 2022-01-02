DROP TABLE IF EXISTS todos CASCADE;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  name varchar,
  completed boolean DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  user_id integer REFERENCES users(id) ON DELETE CASCADE DEFAULT NULL
);