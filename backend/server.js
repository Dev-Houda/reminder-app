require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const reminderRoutes = require("./routes/reminderRoutes");
const startScheduler = require("./services/scheduler");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();
startScheduler();

app.use("/api/reminders", reminderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
