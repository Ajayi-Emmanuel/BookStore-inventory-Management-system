const cartRoute = require("express").Router()
const cartController = require("../controllers/shopcart.controller")

cartRoute.post("/addToCart", cartController.addToCart)

cartRoute.post("/update/:id", cartController.update)

cartRoute.post("/remove/:id", cartController.delete)


module.exports = cartRoute
