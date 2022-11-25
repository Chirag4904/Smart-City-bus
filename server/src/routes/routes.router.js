const express = require("express");

const { httpGetAllRoutes } = require("./routes.controller");

const routesRouter = express.Router();

routesRouter.get("/", httpGetAllRoutes);

module.exports = routesRouter;
