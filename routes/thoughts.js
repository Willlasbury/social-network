const routes = require("express").Router();
const thoughts = require("../controller/index").thoughtMethods;

routes
  .route("/")
  .get(thoughts.getThoughts)
  .post(thoughts.createThought)

routes.route("/delete/:id").delete(thoughts.deleteThought)

routes.route("/:id").put(thoughts.updateThought)

module.exports = routes;
