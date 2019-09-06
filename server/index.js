const express = require("express");
const massive = require("massive");
const app = express();
require("dotenv").config();
const controller = require("./Controllers/Controller")
const { SERVER_PORT, CONNECTION_STRING} = process.env;
//controllers
const {addProduct} = require("./Controllers/Controller");

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance);
    console.log("database connected")
})
.catch(err => console.log(err));

app.use(express.json());



app.post('/api/product', controller.addProduct);
app.get("/api/inventory", controller.getInventory)




app.listen (SERVER_PORT, () => {
    console.log(`listening on ${SERVER_PORT}`)
})