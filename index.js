const express = require("express");
const app = express();

app.get('/hola',function (req, res){
    res.send('[POST]Saludos dice mi server');
});
app.post('/hola',function (req, res){
    res.send('[GET]Saludos dice mi server');
});

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});