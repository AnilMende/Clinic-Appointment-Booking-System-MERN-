import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());


app.get("/api/status", (req, res) => {
    res.send("Server is Working");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server Started at PORT:${PORT}`)});
