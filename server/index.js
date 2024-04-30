require("dotenv").config()
const express = require('express')
const sequelize = require("./db")
const PORT = 5000
const models = require("./models/models")

const userRouter = express.Router()
const bookRouter = express.Router()
const genreRouter = express.Router()

const cors = require("cors")
const fileUpload = require("express-fileupload")

const userController = require("./controllers/UserController")
const bookController = require("./controllers/BookController")
const genreController = require("./controllers/GenreController")
const errorHandler = require("./middleware/ErrorHandlingMiddleware")

const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))

// user
userRouter.post("/registration", userController.registration)
userRouter.post("/login", userController.login)
userRouter.get("/auth", userController.check)

// book
bookRouter.post("/", bookController.create)
bookRouter.get("/", bookController.getAll)
bookRouter.get("/:id", bookController.getById)

// genre
genreRouter.post("/", genreController.create)
genreRouter.get("/", genreController.getAll)

app.use("/api/user", userRouter)
app.use("/api/book", bookRouter)
app.use("/api/genre", genreRouter)

// handling errors
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
