const express = require("express");
const router = express.Router();
const {
  getUsersData,
  createUserData,
  editUserData,
  removeUserData,
} = require("../controller/registerController");

// Create a routing mechanism that redirects incoming requests to the appropriate controller based on the request's endpoint or URL. The controller will handle the request and generate a response that will be sent back to the user.
router.get("/users", getUsersData);
router.post("/users", createUserData);
router.put("/users/:id", editUserData);
router.delete("/users/:id", removeUserData);

module.exports = router;
