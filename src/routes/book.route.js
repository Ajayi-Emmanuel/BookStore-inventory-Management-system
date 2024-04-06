const bookRoute = require("express").Router()
const bookController = require("../controllers/book.controller")

bookRoute.post("/createBook", bookController.createBook)

bookRoute.post("/updateBook/:id", bookController.updateBook)

bookRoute.post("/delete/:id", bookController.delete)

bookRoute.post("/search", bookController.search)

bookRoute.get("/allBooks", bookController.getAll)





module.exports = bookRoute
