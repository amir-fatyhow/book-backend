const uuid = require("uuid")
const path = require("path")
const {Book} = require("../models/models")
const ApiError = require("../error/ApiError")

class BookController {
    async create(req, res, next) {
        try {
            const {name, author, description, price, genreId} = req.body
            const {image} = req.files
            let fileName = uuid.v4() + ".jpg"
            image.mv(path.resolve(__dirname, "..", "static", fileName))

            const book = await Book.create({name, author, description, price, image: fileName, genreId})
            return res.json(book)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getById(req, res) {

    }

    async getAll(req, res) {

    }
}

module.exports = new BookController()