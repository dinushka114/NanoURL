const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
require("dotenv").config();
const db_connection = require("./database/config");

const PORT = process.env.PORT || 3001;

const route = require("./routes/routes");

const app = express();
app.use(cors())

db_connection()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/", route);


app.listen(PORT , ()=>{
    console.log(`Server is running on PORT ${PORT}`);
})