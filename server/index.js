const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Infinora API");
});

app.post("/", (req, res) => {
    const { type } = req.body;

    if (type === "message.new") {
        return res.status(200).send("Message sent!");
    }

    return res.status(200).send("Not a new message request");
});

app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
