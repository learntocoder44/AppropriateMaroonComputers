import mongoose from "mongoose";
const mongodbURL =
  "mongodb+srv://durgamabhilash44:wa6x5VBTtfhh8n9K@cluster0.p8fpxvc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongodbURL);

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});

db.on("connected", () => {
  console.log("Connected to MongoDB");
});

export default db;
