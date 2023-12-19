const express = require("express");
const app = express();
const routes = require("./routes/routes");
const connectDB = require("./database/database");

//parsing incoming JSON data
app.use(express.json());

//connecting to DB
connectDB();

//using routes
app.use("/api/v1", routes);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
