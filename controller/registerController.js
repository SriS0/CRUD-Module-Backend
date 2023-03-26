const Routes = require("../routes/registerRoute");
const User = require("../model/registerSchema");

// Create a GET request handler that retrieves all user data stored in the database. When the webpage is rendered, trigger this GET request to send the retrieved data as a response.
exports.getUsersData = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// Use a middleware function to handle a POST request, where the user-entered data in the form is parsed using the body-parser module and stored in a variable called 'user'. Finally, save the 'user' variable to the database.
exports.createUserData = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// Create a middleware function that handles a PUT request with an 'id' parameter in the request URL. Retrieve the user data associated with the 'id' from the database, update it with the new data received in the request, and save the updated data back to the database.
exports.editUserData = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// Create a middleware function that handles a DELETE request with an 'id' parameter in the request URL. Retrieve the user data associated with the 'id' from the database and delete it. Save the updated database without the deleted user data.
exports.removeUserData = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.send("User deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
