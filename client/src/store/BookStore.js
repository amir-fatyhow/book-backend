import {makeAutoObservable} from "mobx";

export default class BookStore {
    constructor() {
        this._genre = [
            {id: 1, name: "novel"},
            {id: 2, name: "thriller"},
            {id: 3, name: "fantasy"},
            {id: 4, name: "fairy tail"},
        ]
        this._books = [
            {
                id: 1,
                name: "Евгений Онегин 1",
                author: "А.С. Пушкин",
                description: "Роман в стихах",
                price: 199,
                image: "https://w.forfun.com/fetch/59/59c8750681364de90b00e6081342c856.jpeg",
                genre_id: 1
            },
            {
                id: 2,
                name: "Евгений Онегин 2",
                author: "А.С. Пушкин",
                description: "Роман в стихах",
                price: 199,
                image: "https://w.forfun.com/fetch/59/59c8750681364de90b00e6081342c856.jpeg",
                genre_id: 1
            },
            {
                id: 3,
                name: "Евгений Онегин 3",
                author: "А.С. Пушкин",
                description: "Роман в стихах",
                price: 199,
                image: "https://w.forfun.com/fetch/59/59c8750681364de90b00e6081342c856.jpeg",
                genre_id: 1
            },
            {
                id: 4,
                name: "Евгений Онегин 4",
                author: "А.С. Пушкин",
                description: "Роман в стихах",
                price: 199,
                image: "https://w.forfun.com/fetch/59/59c8750681364de90b00e6081342c856.jpeg",
                genre_id: 1
            },
            {
                id: 5,
                name: "Евгений Онегин 5",
                author: "А.С. Пушкин",
                description: "Роман в стихах",
                price: 199,
                image: "https://w.forfun.com/fetch/59/59c8750681364de90b00e6081342c856.jpeg",
                genre_id: 1
            },
            {
                id: 6,
                name: "Евгений Онегин 6",
                author: "А.С. Пушкин",
                description: "Роман в стихах",
                price: 199,
                image: "https://w.forfun.com/fetch/59/59c8750681364de90b00e6081342c856.jpeg",
                genre_id: 1
            },
        ]
        this._selectedGenre = {}
        makeAutoObservable(this)
    }

    setGenre(genre) {
        this._genre = genre
    }

    setBooks(books) {
        this._books = books
    }

    setSelectedGenre(genre) {
        this._selectedGenre = genre
    }

    get genre() {
        return this._genre
    }

    get books() {
        return this._books
    }

    get selectedGenre() {
        return this._selectedGenre
    }
}