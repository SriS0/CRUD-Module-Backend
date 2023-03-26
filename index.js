const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const userDetailsRoutes = require("./routes/registerRoute");
const bodyParser = require("body-parser");
const URL =
  "mongodb+srv://srini624618:SRIni3155@atlascluster.v1ayk1c.mongodb.net/registration_data?retryWrites=true&w=majority";

// Use the body-parser middleware to parse request bodies
app.use(bodyParser.json());

// Use the express.json() middleware to parse JSON requests
app.use(express.json());

// Use the cors middleware to enable CORS for all routes
app.use(cors());

// Middleware is used to handle all routes includes GET,POST,PUT,DELETE
app.use(userDetailsRoutes);

// Start a server listening on a specified port, and establish a connection to the database using a database driver or ORM.
mongoose.set("strictQuery", false);
mongoose
  .connect(URL, { useNewUrlParser: true })
  .then((res) => console.log("connected to the database"))
  .then(() => app.listen(PORT, () => console.log("connected to server")));
