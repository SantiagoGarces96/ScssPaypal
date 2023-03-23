const express = require('express');
var api = express.Router();
const paymentController = require('../controllers/payment.controller');

api.post(`/create-payment/:total`, paymentController.createPayment);
api.get(`/execute-payment`, paymentController.executePayment);
api.get(`/cancel-payment`, paymentController.cancelPayment);

module.exports = api;
