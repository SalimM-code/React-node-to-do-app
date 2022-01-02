const express = require("express");
const router = express.Router();
const userQueries = require("../db/user-queries");

// api/users

router.get("/", (req, res) => {
  userQueries
    .getAllUSers()
    .then((response) => {
      console.log(response.rows[0]);
      const users = response.rows;
      res.json({ users });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/login", (req, res) => {
  const user = req.body;

  userQueries.getUserByEmail(user.email).then((response) => {
    if (!response.rows[0]) {
      return res
        .status(404)
        .send({ status: "Error", message: "Can not find User" });
    } else {
      req.session.user_id = response.rows[0].id;
      const userFromDb = response.rows[0];
      res.send({ ...userFromDb });
    }
  });
});

router.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const user = {
    name,
    email,
    password,
  };

  if (email === "" || password === "") {
    return res.status(400).send("Please fill out a valid email and password");
  }
  userQueries
    .addUser(user)
    .then((response) => {
      console.log(response);
      userQueries.getUserByEmail(user.email).then((response) => {
        req.session.user_id = response.rows[0].id;
        const userFromDb = response.rows[0];
        res.send({ ...userFromDb });
      });
    })
    .catch((error) => {
      console.log("failed to add user", error);
      res.status(400).send("can not add user");
    });
});

router.post("/logout", (req, res) => {
  req.session.user_id = null;
  res.json("seccessfully logged out!");
});
module.exports = router;
