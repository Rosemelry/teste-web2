
const express = require('express');
const Controles = require('../controls/labController');
const midedlewares = require('../middlewares/horarioMiddlewares');

const Rota = express.Rotas();

Rota.get('/laboratorio/todos',midedlewares.horarioMiddleware,Controles.getLab);
Rota.get('/laboratorio/relatorio',midedlewares.horarioMiddleware,Controles.gerarRelatorio);
Rota.post('/laboratorio/todos/novo',Controles.postLab);


module.exports=Rota
