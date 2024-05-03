import {$host} from "./index";
import {PAGE_LIMIT} from "../consts";

export const fetchGenres = async () => {
    const {data} = await $host.get("api/genre")
    return data
}

export const fetchBooks = async (genreId) => {
    const {data} = await $host.get("api/book", {
        params: {
            genreId
        }
    })
    return data
}