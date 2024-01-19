const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require("./routes/auth.js");

require("dotenv").config();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
