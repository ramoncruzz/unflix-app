import service from './Themoviedb.service';
import {
  movie,
  movieResponse,
  genresList,
  genre as genreType,
} from '../utils/types';

const movieDetail = (id: number) =>
  new Promise<movie>((resolve, reject) => {
    service
      .get<movie>(`/movie/${id}`)
      .then((response) => {
        console.log(`Detalhe do id ${id} buscado`);
        resolve(response.data);
      })
      .catch((error) => reject(error));
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
        console.log(`Pagina ${page} chamada!`);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });

const searchMovie = (movieName: string, page: number) =>
  new Promise<movieResponse>((resolve, reject) => {
    service
      .get<movieResponse>('/search/movie', {
        params: {
          query: movieName,
          page,
        },
      })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
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

export { movieDetail, discover, trending, genre, searchMovie };
