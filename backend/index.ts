import express from "express";
import cors from "cors";
const app = express();


require("dotenv").config();

const PORT = process.env.APP_PORT;
app.use(cors());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get("/", (req, res) => {
    res.json({ data: "Hello from Express!"});
})