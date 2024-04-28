import express from "express";
const app = express();

require("dotenv").config();

app.listen(process.env.APP_PORT, () => {
    console.log("Server is running on port 3000");
});