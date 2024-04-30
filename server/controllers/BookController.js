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
            await image.mv(path.resolve(__dirname, "..", "static", fileName))

            const book = await Book.create({name, author, description, price, image: fileName, genreId})
            return res.json(book)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getById(req, res) {
        const {id} = req.params
        const book = await Book.findOne({where: {id}})
        return res.json(book)
    }

    async getAll(req, res) {
        let {genreId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let books
        if (genreId) {
            books = await Book.findAndCountAll({where:{genreId}, limit, offset})
            return res.json(books)
        }
        books = await Book.findAndCountAll({limit, offset})
        return res.json(books)
    }
}

module.exports = new BookController()