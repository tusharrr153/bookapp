import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./Route/book.route.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error:", error);
  });


//defining route
app.use("/book", bookRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
