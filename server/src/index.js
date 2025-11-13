import express from "express";
import cors from "cors";
import "dotenv/config";
import { db } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/monsters", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM monsters ORDER BY id");
        res.json(result.rows);
    } catch (err) {
        console.error("DB error:", err);
        res.status(500).json({ error: "Database error"});
    }
});


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
