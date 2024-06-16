import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDQ2ZWZlMjcwNmQ4N2VhMGFiYWYzNWY3ODBkYWE1ZiIsInN1YiI6IjY2NmVkMzk5NjgyMGEzOWE4MGViZmJkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RO44OVbNaenE_UVWGkoAV7xiOswYI7KORUgxQCy1v_k",
  },
};

export const getMovies = async () => {
  const response = await axios.get("/trending/movie/day", options);
  return response.data.results;
};
export const getSearchMovies = async (query) => {
  const response = await axios.get("/search/movie", {
    params: {
      query: query,
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDQ2ZWZlMjcwNmQ4N2VhMGFiYWYzNWY3ODBkYWE1ZiIsInN1YiI6IjY2NmVkMzk5NjgyMGEzOWE4MGViZmJkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RO44OVbNaenE_UVWGkoAV7xiOswYI7KORUgxQCy1v_k",
    },
  });
  return response.data;
};
export const getMovieDetails = async (id) => {
  const response = await axios.get(`/movie/${id}`, options);
  return response.data;
};
export const getMovieCast = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`, options);
  return response.data.cast;
};
export const getMovieReviews = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`, options);
  return response.data.results;
};
