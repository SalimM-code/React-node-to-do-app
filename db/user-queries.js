const db = require("./db");

const getAllUSers = () => {
  return db.query(`SELECT * FROM users`);
};

const getUserByEmail = (email) => {
  return db.query(`SELECT * FROM users WHERE email=$1`, [`${email}`]);
};

const addUser = (user) => {
  return db
    .query(
      `INSERT INTO users(name, email, password)
          VALUES($1,$2,$3) RETURNING *;`,
      [`${user.name}`, `${user.email}`, `${user.password}`]
    )
    .then((response) => {
      if (response.rows.length) {
        return response.rows[0];
      }
    });
};

module.exports = {
  addUser,
  getUserByEmail,
  getAllUSers
};
