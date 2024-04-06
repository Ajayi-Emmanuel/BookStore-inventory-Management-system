const express = require("express")
const cors = require("cors")
const log = require("./src/utils/logger")
const {testDatabaseConnection} = require('./src/utils/db');
require("dotenv").config()

//routes
const userRoute = require("./src/routes/user.route");
const bookRoute = require("./src/routes/book.route")
const cartRoute = require("./src/routes/cart.route")
const orderRoute = require("./src/routes/order.route")
const {verifyToken} = require("./src/middleware/authorize")


const port = process.env.PORT
const app = express()

//routes

app.use("/", userRoute)             
app.use("/book", verifyToken, bookRoute)
app.use("/cart", verifyToken, cartRoute)
app.use("/order", verifyToken, orderRoute)


//middleware
app.use(express.json())
app.use(cors())

app.listen(port, async () => {
    log.info(`App is Listening: ${port}`)
    //database
    await testDatabaseConnection() 
})

