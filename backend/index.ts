import express from "express";
const app = express();

require("dotenv").config();

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello World");
})