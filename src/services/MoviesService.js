import axios from "axios"

const apiClient = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    withCredentials: false,
    headers: {
        Accept:'application/json',
        'Content-Type':'application/json'
    },
    timeout: 10000
})

const apiKey = "?api_key=98ff4bb371b9b5580331e41193532c5b"

export default {
    getMovies(page) {
        return apiClient.get('/movie/popular' + apiKey + '&language=en-US&page=' + page)
    },
    getMovieById(id) {
        return apiClient.get('/movie/' + id + apiKey + '&language=en-US')
    }
}
