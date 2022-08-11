require('dotenv').config()
const express = require("express");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
const user = require("./routes/user");
const api = require("./routes/wetherApi");
require("./databases/mongoDb");
var cors = require('cors');
app.use(cors());
const checkConnection = require("./middleware/checkConnection")
app.use(checkConnection);

app.use('/user',user);
app.use('/api',api);


app.listen(PORT, () => {
console.log("Server is up on port "+PORT);
    });