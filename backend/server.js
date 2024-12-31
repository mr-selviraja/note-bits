const express = require("express");

// Create an Express application instance
const app = express();

// Set a port for the server to run on
const port = process.env.PORT || 3001;

// Listen for requests on the root route
app.get("/", (req, res) => {
    console.log("GET request received at '/' route");
    res.send({ success: true, message: "Hello, from the Server..!" });
});

// Start the Express server and listen on the specified port
app.listen(port, () => {
    console.log(`Server started on PORT: ${port}`);
});