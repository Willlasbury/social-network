const router = require("express").Router();

const userRoutes = require("./users");
const thoughtRoutes = require("./thoughts");
const friendRoutes = require("./friends");

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);
router.use(friendRoutes);

module.exports = router;
