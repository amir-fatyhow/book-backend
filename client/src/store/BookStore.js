import {makeAutoObservable} from "mobx";

export default class BookStore {
    constructor() {
        this._genre = []
        this._books = []
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