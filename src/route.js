const express = require('express');
const route = express();

//Import Controller
const controller = require('./controller');

//Create Route
route.get('/index',controller.index);
route.get('/list',controller.list);
route.get('/create',controller.create);
route.get('/update',controller.update);
route.get('/get/:id',controller.get);
route.get('/delete/:id',controller.delete);

module.exports = route;