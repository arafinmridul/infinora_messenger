const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
