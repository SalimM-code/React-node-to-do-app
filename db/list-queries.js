const db = require("./db");

const addTodo = (todo) => {
  return db
    .query(
      `INSERT INTO todos(name, user_id)
        VALUES($1, $2) RETURNING *;`,
      [`${todo.name}`, `${todo.id}`]
    )
    .then((response) => {
      if (response.rows.length) {
        return response.rows[0];
      }
    });
};

const getTodo = (id) => {
  return db
    .query(`SELECT * FROM todos WHERE user_id=$1;`, [`${id}`])
    .then((data) => {
      if (data.rows.length) {
        return data.rows;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const getCompleted = (id, completed) => {
  return db.query(`SELECT * FROM todos WHERE user_id=$1 AND completed=$2;`, [
    `${id}`,
    `${completed}`,
  ])
  .then(data => {
    if( data.rows.length) {
      return data.rows
    }
  })
};

module.exports = {
  addTodo,
  getTodo,
  getCompleted,
};
