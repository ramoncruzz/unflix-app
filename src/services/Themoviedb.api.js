import service from './Themoviedb.service';

const movieDetail = (id) =>
  new Promise((resolve, reject) => {
    service
      .get(`/movie/${id}`)
      .then((movie) => resolve(movie))
      .catch((erro) => reject(erro));
  });

const discover = (page) =>
  new Promise((resolve, reject) => {
    service
      .get('/discover/movie', {
        params: {
          page,
        },
      })
      .then((movies) => {
        resolve(movies);
      })
      .catch((error) => {
        reject(error);
      });
  });

const trending = () =>
  new Promise((resolve, reject) => {
    service
      .get('/trending/movie/week')
      .then((movies) => resolve(movies))
      .catch((error) => reject(error));
  });

const genre = () =>
  new Promise((resolve, reject) => {
    service
      .get('/genre/movie/list')
      .then((genres) => resolve(genres))
      .catch((error) => reject(error));
  });

const searchMovie = (movieName) =>
  new Promise((resolve, reject) => {
    service
      .get('/search/movie', {
        params: {
          query: movieName,
        },
      })
      .then((response) => resolve(response.results))
      .catch((error) => reject(error));
  });

export { movieDetail, discover, trending, genre, searchMovie };
