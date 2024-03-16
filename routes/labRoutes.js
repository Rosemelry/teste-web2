
const express = require('express');
const Controles = require('../controls/labController');
const midedlewares = require('../middlewares/horarioMiddlewares');

const Rota = express.Router();

Rota.get('/laboratorio/todos',Controles.getLab);
Rota.get('/laboratorio/relatorio',midedlewares.horarioMiddleware,Controles.gerarRelatorio);
Rota.post('/laboratorio/todos/novo',midedlewares.horarioMiddleware,Controles.postLab);


module.exports=Rota
