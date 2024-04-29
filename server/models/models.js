const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const User = sequelize.define("user", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define("basket", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketBook = sequelize.define("basket_book", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Book = sequelize.define("book", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    author: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false},
})

const Genre = sequelize.define("genre", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketBook)
BasketBook.belongsTo(Basket)

Book.hasOne(BasketBook)
BasketBook.belongsTo(Book)

Genre.hasMany(Book)
Book.belongsTo(Genre)

module.exports = {
    User,
    Basket,
    BasketBook,
    Book,
    Genre
}
