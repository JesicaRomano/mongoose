const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.router');
const productRouter = require('./routes/products.router');
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Server is runnig on port ${port}`)
});

app.use(express.json());

mongoose.connect('mongodb+srv://eladiaromano:wzkvROh37Inf6pGD@cluster0.7yu0c6t.mongodb.net/')
    .then(() => {
    console.log("Conectado a la BD de Mongo Atlas");
    })
    .catch(error => {
    console.log("Error en la conexion", error);
    })

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);