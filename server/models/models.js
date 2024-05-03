const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const User = sequelize.define("user", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
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
    description: {type: DataTypes.TEXT, allowNull: false},
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

async function insertData() {
    // roman
    const castle = Book.build({
        name: "Замок",
        author: "Франц Кафка",
        description:
            "В заснеженную деревню приезжает человек по имени К. " +
            "К. устраивается на ночлег на постоялом дворе, " +
            "но его будят среди ночи с требованием покинуть деревню, " +
            "так как она является территорией Замка, а в Замке нельзя находиться без специального разрешения...",
        price: 199,
        image: "efd7f0a5-0b5f-4011-8b0c-6911cae4292b.jpg",
        genreId: 1
    })
    await castle.save()

    const eugene_onegin = Book.build({
        name: "Евгений Онегин",
        author: "А.С.Пушкин",
        description:
            "Роман в стихах «Евгений Онегин» по праву можно считать " +
            "энциклопедией русской жизни — в нем отразились быт и нравы первой трети XIX века, " +
            "и энциклопедией мировой культуры — в нем А. С. Пушкин называет более двухсот имен русских, " +
            "античных и европейских писателей, философов, полководцев, художников, актеров, композиторов: " +
            "от Апулея до Россини.",
        price: 199,
        image: "f1180cb5-f06b-422f-a3d9-5cad104d8af5.jpg",
        genreId: 1
    })
    await eugene_onegin.save()

    const wonderful_world = Book.build({
        name: "О дивный новый мир",
        author: "Хаксли Олдос",
        description:
            "По сюжету главный герой произведения Бернард Маркс — " +
            "представитель высшей касты в мире будущего — " +
            "чувствует себя чужим среди своих. Ведь и внешне, " +
            "и внутренне он отличается от альфа-собратьев из пробирки.",
        price: 199,
        image: "1f3e61b6-fa7d-4654-af3f-5fa5f4cf10e6.jpg",
        genreId: 1
    })
    await wonderful_world.save()

    //thriller
    const escape = Book.build({
        name: "Побег из Шоушенка",
        author: "Стивен Кинг",
        description:
            "История невинного человека, приговоренного к пожизненному заключению в тюремном аду. " +
            "Жесткая история выживания там, где выжить практически невозможно. " +
            "Увлекательная история побега оттуда, откуда не сумел вырваться еще никто...",
        price: 199,
        image: "4fbaabaa-c6d4-4b92-ac7b-b027f79df7b6.jpg",
        genreId: 3
    })
    await escape.save()

    const secret_story = Book.build({
        name: "Тайная история",
        author: "А.С.Пушкин",
        description:
            "Действие происходит в небольшом колледже в Вермонте, " +
            "куда Ричард Пейпен приезжает изучать древнегреческий язык. " +
            "Новые друзья Ричарда — четверо молодых людей и одна девушка — так увлечены античной культурой, " +
            "что рассматривают себя чуть ли не как особую касту ее хранителей. " +
            "В веселой и сплоченной компании происходит убийство...",
        price: 199,
        image: "74c8ab85-1c89-451d-baa9-b0784c9d259c.jpg",
        genreId: 3
    })
    await secret_story.save()

    const code = Book.build({
        name: "Код да Винчи",
        author: "Дэн Браун",
        description:
            "Секретный код скрыт в работах Леонардо да Винчи... " +
            "Только он поможет найти христианские святыни, дающие немыслимые власть и могущество... " +
            "Ключ к величайшей тайне, над которой человечество билось веками, наконец может быть найден...",
        price: 199,
        image: "0c5416c9-55d3-4eed-9a83-abb1eb00fa1d.jpg",
        genreId: 3
    })
    await code.save()

    // fantasy
    const f = Book.build({
        name: "451° по Фаренгейту",
        author: "Рэй Брэдбери",
        description:
            "Главный герой — Монтэг — пожарник, но смысл этой профессии давно изменился. " +
            "Дома теперь строятся из термостойких сплавов, а пожарники занимаются тем, что сжигают книги. " +
            "Не произведения определенных авторов — запрещена литература вообще и люди, хранящие " +
            "и читающие книги, совершают преступление против государства. ",
        price: 199,
        image: "27395003-3a95-4822-9121-11b8610608a1.jpg",
        genreId: 2
    })
    await f.save()

    const duna = Book.build({
        name: "Дюна",
        author: "Фрэнк Герберт",
        description:
            "Роман \"Дюна\", первая книга прославленной саги, " +
            "знакомит читателя с Арракисом – миром суровых пустынь. " +
            "Безграничная фантазия автора создала яркую, почти осязаемую вселенную, " +
            "в которой есть враждующие Великие Дома, могущественная Космическая Гильдия, " +
            "загадочный Орден Бинэ Гессерит и неуловимые ассасины.",
        price: 199,
        image: "e27ca726-9550-4a0f-aedb-d16dd5868bfe.jpg",
        genreId: 2
    })
    await duna.save()

    const neromant = Book.build({
        name: "Нейромант",
        author: "Уильям Гибсон",
        description:
            "«Нейромант» — это классический дебют жанрового революционера, которому оказались тесны рамки любого жанра. " +
            "Это книга, определившая лицо современной литературы на десятилетия вперед. ",
        price: 199,
        image: "3303eb98-0f8b-4851-9198-cb3d3e0ff7ea.jpg",
        genreId: 2
    })
    await neromant.save()

    //fairy tail
    const leftHanded = Book.build({
        name: "Левша",
        author: "Николай Лесков",
        description:
            "Между Аркадием и актрисой крепостного театра графа Каменского Любовью " +
            "вспыхивает взаимное чувство. Тупейный художник, " +
            "желая спасти юную девушку от излишнего внимания настойчивого графа, " +
            "решает увезти ее подальше от барских глаз. Но все планы идут прахом... " ,
        price: 199,
        image: "6fbecf07-69f9-4a6c-983b-fdba2d2c658f.jpg",
        genreId: 4
    })
    await leftHanded.save()

    const unknowner = Book.build({
        name: "Незнайка на Луне",
        author: "Николай Носов",
        description:
            "Сатирический роман-сказка с элементами научной фантастики вошел в золотой фонд детской русской литературы. " +
            "«Незнайка на Луне» – заключительная, третья часть увлекательной трилогии про приключения " +
            "Незнайки и его друзей.",
        price: 199,
        image: "631c7839-15b1-4dda-8eab-d5dc1111ac15.jpg",
        genreId: 4
    })
    await unknowner.save()

    const wizard = Book.build({
        name: "Волшебник Изумрудного города",
        author: "Александр Волков",
        description:
            "Удивительные приключения маленькой девочки Элли и ее друзей – " +
            "Трусливого Льва, Страшилы и Железного Дровосека. Ураган, " +
            "вызванный коварной колдуньей Гингемой, унес домик-фургон главной героини далеко от дома. " +
            "Добрая волшебница Виллина сообщает Элли, что вернуть ее в Канзас способен только великий и " +
            "могущественный Гудвин, правитель Изумрудного города.",
        price: 199,
        image: "0bd84edd-414b-4bfb-b3a9-c4c8a323d0e2.jpg",
        genreId: 4
    })
    await wizard.save()
}

insertData()


module.exports = {
    User,
    Basket,
    BasketBook,
    Book,
    Genre
}
