import service from './Themoviedb.service';
import {
  movie,
  movieResponse,
  genresList,
  genre as genreType,
} from '../utils/types';

const movieDetail = (id: number) =>
  new Promise((resolve, reject) => {
    service
      .get<movie>(`/movie/${id}`)
      .then((movie) => resolve(movie))
      .catch((erro) => reject(erro));
  });

const discover = (page: number) =>
  new Promise<movieResponse>((resolve, reject) => {
    service
      .get<movieResponse>('/discover/movie', {
        params: {
          page,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });

const trending = (page: number) =>
  new Promise<movieResponse>((resolve, reject) => {
    service
      .get<movieResponse>('/trending/movie/week', { params: { page } })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });

const genre = () =>
  new Promise<Array<genreType>>((resolve, reject) => {
    service
      .get<genresList>('/genre/movie/list')
      .then((response) => {
        console.log(`/genre chamada`);
        resolve(response.data.genres);
      })
      .catch((error) => reject(error));
  });

//TODO mudar respostas desse metodo para informar as paginas. Serão necessárias para o sistema de cache
const searchMovie = (movieName: string) =>
  new Promise((resolve, reject) => {
    service
      .get<movieResponse>('/search/movie', {
        params: {
          query: movieName,
        },
      })
      .then((response) => resolve(response.data.results))
      .catch((error) => reject(error));
  });

export { movieDetail, discover, trending, genre, searchMovie };
