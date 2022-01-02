const express = require("express");
const router = express.Router();
const todoQueries = require("../db/list-queries");

router.get("/todos", (req, res) => {
  const id = req.session.user_id;
  console.log("id", id);

  todoQueries.getTodo(id).then((response) => {
    const todoList = response;
    res.send({ todoList: todoList });
    console.log("1", response);
  });
});

router.get("/completed", (req, res) => {
  const id = req.session.user_id;
  const completed = true;

  todoQueries.getCompleted(id, completed).then((response) => {
    const completedList = response;
    res.send({ completedList: completedList });
    console.log("2", response);
  });
});

router.post("/new", (req, res) => {
  const id = req.session.user_id;
  const name = req.body.name;
  const todo = {
    name,
  };

  todoQueries.addTodo(todo, id).then((response) => {
    const data = response;
    res.send({ data: data });
  });
});

module.exports = router;
