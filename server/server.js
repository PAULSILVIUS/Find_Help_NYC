require("dotenv").config();

const express = require("express");
const db = require("./db");
// morgan 3rd party middleware
const morgan = require("morgan");
const app = express();


// express middleware
app.use(express.json());


// Get all therapists
app.get("/api/v1/Therapists", async (req, res) => {
  const results = await db.query("SELECT * FROM therapist");
  console.log(results);
  res.status(200).json({
    status: "success",
    data: {
      therapists: ["Joey", "Tony"],
    },
  });
});

// Get therapist by ID
app.get("/api/v1/Therapists/:id", (req, res) => {
  console.log(req.params);

  res.status(200).json({
    status: "success",
    data: {
      therapist: "Joey",
    },
  });
});

// Create therapist
app.post("/api/v1/Therapists", (req, res) => {
  console.log(req.body);
  // status(201) for create
  res.status(201).json({
    status: "success",
    data: {
      therapist: "Joey",
    },
  });
});

// Update therapist
app.put("/api/v1/Therapists/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  res.status(200).json({
    status: "success",
    data: {
      therapist: "Joey",
    },
  });
});

// Delete therapist
app.delete("/api/v1/Therapists/:id", (req, res) => {
  res.status(204).json({
    status: "success",
  });
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server is listening on port", port);
});
