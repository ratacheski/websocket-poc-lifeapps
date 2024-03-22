const express = require("express");
const { createServer } = require("http");
const { join } = require("path");

const app = express();
const server = createServer(app);

app.get("/", (req, res) => {
  res.sendFile(join(`${__dirname}/public`, "index.html"));
});

server.listen(8080, () => {
  console.log("App is running on http://localhost:8080");
});
