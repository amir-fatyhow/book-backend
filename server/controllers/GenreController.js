const {Genre} = require("../models/models")
const ApiError = require("../error/APIError")

class GenreController {
    async create(req, res) {
        const {name} = req.body
        const genre = await Genre.create({name})
        return res.json(genre)
    }

    async getAll(req, res) {
        const genres = await Genre.findAll()
        return res.json(genres)
    }
}

module.exports = new GenreController()