
const express = require('express');
const rotas = require('./routes/labRoutes')
//const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(rotas);

app.listen(process.env.PORT || 3000 ,()=>{
    console.log("Rodando...")
});