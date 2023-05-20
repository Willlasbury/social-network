const router = require("express").Router();
const reaction = require("../controller/index").reactionMethods;

router
  .route("/thoughts/:thoughtId/reactions")
  .post(reaction.updateReaction)


router
  .route("/thoughts/:thoughtId/reactions/:reactionId")
  .delete(reaction.deleteReaction);

module.exports = router;
