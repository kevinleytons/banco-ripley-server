
const express = require('express');
const api = express.Router();

const MainController = require("../controllers/main.controller");

api.get('/bancos', MainController.obtenerBancos);
api.get('/destinatario', MainController.obtenerDestinatarios);
api.post('/destinatario', MainController.registrarDestinatario);
api.post('/transferencia', MainController.registrarTransferencia);
api.get('/historial', MainController.obtenerHistorial);

module.exports = api;