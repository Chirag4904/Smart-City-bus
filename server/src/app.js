const express = require("express");
const app = express();
const cors = require("cors");

const routesRouter = require("./routes/routes.router");
// const subjectsRouter = require("./routes/subjects/subjects.router");

/** setup logging */
// source: https://stackoverflow.com/a/47074065

/** =============== */

const AuthRoute = require("./routes/auth");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error(err);
    res.status(400).json({ error: true, error_desc: err }); // Bad request
    return;
  }
  next();
});

app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/routes", routesRouter);

app.use("/auth", AuthRoute);

module.exports = app;
