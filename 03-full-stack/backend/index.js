const express = require("express");
const app = express();
const routes = require("./routes/routes");
const connectDB = require("./database/database");
const { PORT } = require("./config/config");

//connecting to DB
connectDB();

//using routes
app.use("/api/v1", routes);

// const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
