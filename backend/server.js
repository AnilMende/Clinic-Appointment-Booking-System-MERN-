import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import router from "./routes/appointmentRoutes.js";
import adminRouter from "./routes/adminAuthRoutes.js";

const app = express();

app.use(express.json());

app.use(cors({
    origin : "*",
    methods : ["GET", "POST", "PUT", "DELETE", "PATCH"]
}));


//Status - checking
app.get("/api/status", (req, res) => {
    res.send("Server is Working");
})

const PORT = process.env.PORT || 5000;

//Database
await connectDB();

//Api Endpoints
app.use("/api", router);
app.use("/api/auth", adminRouter);

app.listen(PORT, () => { console.log(`Server Started at PORT:${PORT}`) });
