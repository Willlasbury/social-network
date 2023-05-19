const routes = require("express").Router();
const userRoutes = require("../controller/index").userMethods;

routes.route("/users").get(userRoutes.getUsers).post(userRoutes.createUser);

module.exports = routes;
