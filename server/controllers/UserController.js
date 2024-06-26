const ApiError = require("../error/APIError")
const bcrypt = require("bcrypt")
const jsw = require("jsonwebtoken")
const {User, Basket} = require("../models/models")

const generateJwt = (id, email) => {
    return jsw.sign({id, email}, "secret_key", {expiresIn: "24h"}, [])
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if(!email || !password) {
            return next(ApiError.badRequest("Incorrect email or password"))
        }
        const candidate = await User.findOne({
            where: {
                email: email
            }
        })
        if (candidate) {
            return next(ApiError.badRequest("User with this email already exists"))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})

        const basket = await Basket.create({userId: user.id})
        const token = await generateJwt(user.id, user.email)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal("user is not found with this email"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal("password is incorrect"))
        }
        const token = generateJwt(user.id, user.email)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email)
        return res.json({token})
    }

}

module.exports = new UserController()