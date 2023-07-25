const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.get("/App", (req, res) => {
    res.json({ message: "Candidate data received" });
  });
  

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});