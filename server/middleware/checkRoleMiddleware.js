const jwt = require("jsonwebtoken")

module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(" ")[1]
            if (!token) {
                return res.status(401).json({message: "Has no authorization"})
            }
            const decoded = jwt.verify(token, "secret_key")
            if (decoded.role !== role) {
                return res.status(403).json({message: "has no access"})
            }
            req.user = decoded
            next()
        } catch (e) {
            res.status(401).json({message: "Has no authorization"})
        }
    }
}