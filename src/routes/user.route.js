const userRoute = require("express").Router()
const userController = require("../controllers/user.controller")

userRoute.post("/login", userController.login)

userRoute.post("/createAccount", userController.createAccount)

userRoute.get("/profile/:id", userController.getProfile)


module.exports = userRoute
