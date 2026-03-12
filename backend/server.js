import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import router from "./routes/appointmentRoutes.js";

const app = express();

app.use(express.json());

app.use(cors());


app.get("/api/status", (req, res) => {
    res.send("Server is Working");
})

const PORT = process.env.PORT || 5000;

//Database
await connectDB();

//Api Endpoints
app.use("/api", router);

app.listen(PORT, () => { console.log(`Server Started at PORT:${PORT}`)});
