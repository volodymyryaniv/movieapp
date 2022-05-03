import axios from "axios";

const URL = 'https://api.themoviedb.org';

export const getTrendingMovies = (page = 1) => {
   return axios
         .get(`${URL}//3/trending/movie/day?page=${page}&api_key=2815bb4c9c06084df81dd7d6acbff60a`)
         .then(res => res.data)

};
export const getMovieWithQuery = (query,page = 1) => {
   return axios
         .get(`${URL}/3/search/movie?page=${page}&api_key=2815bb4c9c06084df81dd7d6acbff60a&query=${query}`)
}

export const getDetailMovieWithId = (id) => {
   return axios
            .get(`${URL}/3/movie/${id}?api_key=2815bb4c9c06084df81dd7d6acbff60a`)
            .then(res => res.data)
}

export const getCastWithId = (id) => {
   return axios
         .get(`${URL}/3/movie/${id}/credits?api_key=2815bb4c9c06084df81dd7d6acbff60a`)
         .then(res => res.data.cast)
}
export const getReviewsWithId = (id) => {
   return axios   
         .get(`${URL}/3/movie/${id}/reviews?api_key=2815bb4c9c06084df81dd7d6acbff60a`)
         .then(res => res.data.results)
}
