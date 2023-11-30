const express = require("express");
const events = require("./data/events");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/events", (req, res) => {
  res.json(events);
});

app.get("/api/events/:id", (req, res) => {
  const event = events.find((e) => e._id === req.params.id);

  res.send(event);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
