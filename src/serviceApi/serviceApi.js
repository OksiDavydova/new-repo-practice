import axios from "axios";

const API_KEY = "9c85780e51be24ce66dcc89d24578143";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const baseURL = "https://api.themoviedb.org/3";
// console.log(axios);
export async function fetchMovies(url = "", config = "") {
  const response = await axios
    .get(url, config)
    .then((response) => response?.data?.results)
    .catch((error) => console.log(error));
  return response;
  // if (response) {
  //   const data = response.data.results;
  //   console.log(data);
  //   return data;
  // }
}

//список самых популярных фильмов на сегодня для создания коллекции на главной странице
export function fetchMoviesByTrending(page) {
  return fetchMovies(
    `/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false`
  );
}

//поиск кинофильма по ключевому слову на странице фильмов
export function fetchMoviesByKeyWord(keyWord, page) {
  return fetchMovies(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${keyWord}&page=${page}&include_adult=false`
  );
}

//запрос полной информации о фильме для страницы кинофильма
export async function fetchMovieById(movie_id) {
  const response = await fetch(
    `${baseURL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("nothing found!"));
}

//запрос информации о актёрском составе для страницы кинофильма
export async function fetchMovieCredits(movie_id) {
  // return fetchMovies(`/movie/${movie_id}/credits`);
  const response = await fetch(
    `${baseURL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("nothing found!"));
}

//запрос полной информации о фильме для страницы кинофильма
export async function fetchMovieReviews(movie_id) {
  // return fetchMovies(`/movie/${movie_id}/reviews`);
  const response = await fetch(
    `${baseURL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("nothing found!"));
}
