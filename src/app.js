const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const upload = require("express-fileupload");
const port = process.env.PORT || 3000;

dotenv.config({ path: "./src/Config/.env" });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());
app.use(upload());

//require models & connect to db
require("./DB/conn");

// public
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

app.use("/auth",require("./Routes/auth.routes"))



app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`app listening on port ${port}!`));
