const express = require("express")
const route = express.Routes();

route.get("/", gitController.ordertrack);
route.get("/assigOrder", gigController.assignOrder);

module.exports = route;