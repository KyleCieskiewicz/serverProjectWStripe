const express = require('express');
const massive = require('massive');
const stripe = require('stripe')('sk_test_pkT6JuzywIBSGCdsoyJpxPhs');
const { json } = require('body-parser');
const cors = require("cors");
const { dbUser, database } = require('./config');

const serverController = require('./serverController');
const port = 3000;
const connectionString = `postgres://${dbUser}@localhost/${database}`

const app = express();

app.use(json());
app.use(cors());
app.use(express.static(__dirname + '/public'));



const massiveConnection = massive(connectionString)
    .then(db => {
        app.set('db', db);
    })
    .catch(err => {
        console.log(err);
    });


// app.get('/', serverController.stripeServer);
app.post("/api/orders", serverController.addOrder);
app.get("/api/orders", serverController.getAllOrders);
app.post("/api/users", serverController.addUser);




app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})