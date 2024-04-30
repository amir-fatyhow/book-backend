require("dotenv").config()
const express = require('express')
const sequelize = require("./db")
const PORT = 5000
const models = require("./models/models")
const userRouter = express.Router()
const bookRouter = express.Router()
const genreRouter = express.Router()
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// user
userRouter.post("/registration")
userRouter.post("/login")
userRouter.get("/auth")

// book
bookRouter.post("/")
bookRouter.get("/")
bookRouter.get("/:id")

// genre
genreRouter.post("/")
genreRouter.get("/")

app.use("/user", userRouter)
app.use("/book", bookRouter)
app.use("/genre", genreRouter)

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
