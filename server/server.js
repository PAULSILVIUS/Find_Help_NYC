require("dotenv").config();
const express = require("express");

const app = express();

// Middleware
app.use((req,res,next) => {
    console.log("Our middleware is running");
    next();
});

// Get all therapists
app.get("/api/v1/Therapists", (req, res) => {
    console.log("It runs");
    res.status(200).json({
    status: "success",
    data: {
      therapists: ["Joey", "Tony"],
    },
  });
});

// Get therapist by ID
app.get("/api/v1/Therapists/:id", (req, res) => {
  console.log(req.params.id);
});

// Create therapist
app.post("/api/v1/Therapists", (req, res) => {
    console.log(req);
});



const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server is listening on port", port);
});
