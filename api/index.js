const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
// const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

dotenv.config();

const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connection successfull"))
  .catch((err) => console.log(err));

// app.use(cors());
// app.use(express.json());
// app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.listen(PORT || 7000, () => {
  console.log(`server is running ${PORT || 7000}`);
});
