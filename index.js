import express from "express";
import db from "./db.js";
import bodyParser from "body-parser";
import Person from "./models/person.js";
const app = express();

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("server is runnng");
});

app.post("/person", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);

    const response = await newPerson.save();

    console.log("data saved");

    res.status(200).json(response);
  } catch (err) {
    console.log("error internal error", err);

    res.status(500).json({ err: "internal server error" });
  }
});

app.get("/person", async (req, res) => {
  try {
    const data = await Person.find();

    console.log("data fetched from database");

    res.status(200).json(data);
  } catch (err) {
    console.log("data not fetched from the database", err);

    res
      .status(500)
      .json({ err: "internal server error to fetch data from database" });
  }
});

app.listen(3000, () => {
  console.log("Express server initialized");
});
