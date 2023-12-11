const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());

app.get("/api/v1/contact", (req, res) => {
  res.json({ city: "Lahore", country: "Pakistan" });
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
