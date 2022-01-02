require("dotenv").config();

const express = require("express");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const userRoutes = require("./routes/users");
const todoRoutes = require("./routes/todos");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    keys: ["I like secret keys!", "155239186e52 3tgd9301"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.use("/api/todo", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
