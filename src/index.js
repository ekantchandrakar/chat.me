const path = require("path");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.json());
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.send();
});

app.listen(port, (req, res) => {
  console.log("Server is running on port port " + port);
})
