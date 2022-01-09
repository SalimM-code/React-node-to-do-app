const { response } = require("express");
const express = require("express");
const router = express.Router();
const todoQueries = require("../db/list-queries");

// /api/todo

router.get("/todos", (req, res) => {
  const id = req.session.user_id;

  todoQueries.getTodo(id).then((response) => {
    const todoList = response;
    res.send({ todoList: todoList });
  });
});

router.get("/completed", (req, res) => {
  const id = req.session.user_id;
  const completed = true;

  todoQueries.getCompleted(id, completed).then((response) => {
    const completedList = response;
    res.send({ completedList: completedList });
  });
});

router.post("/new", (req, res) => {
  const id = req.session.user_id;

  const name = req.body.name;
  const todo = {
    name,
    id,
  };

  todoQueries.addTodo(todo, id).then((response) => {
    const data = response;
    // res.send({ data: data });
  });
  todoQueries.getTodo(todo.id).then((response) => {
    const data = response;
    res.send({ data: data });
  });
});

router.delete("/delete", (req, res) => {
  // todoQueries.deleteTodo()
  const id = req.headers.id;
  todoQueries.deleteTodo(id).then((response) => {
    res.send("todo delete successfully");
  });
});

module.exports = router;
