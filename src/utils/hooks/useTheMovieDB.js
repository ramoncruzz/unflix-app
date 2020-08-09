import { useState, useEffect } from 'react';
import {
  movieDetail,
  discover,
  trending,
  genre,
} from '../../services/Themoviedb.api';

const useTheMovieDB = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [genresList, setGenresList] = useState([]);
  const [termSearch, setTermSearch] = useState(null);
  const [trendsOfWeek, setTrendOfWeek] = useState([]);
  const [movie, setMovie] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    trending()
      .then((_trends) => {
        setTrendOfWeek(_trends);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    genre()
      .then((_genrer) => {
        const { genres } = _genrer;
        setGenresList(genres);
        discover(page)
          .then((_movies) => {
            const {
              total_results: TotalResults,
              total_pages: TotalPages,
              results,
            } = _movies;
            const genreObject = genres.reduce((obj, item) => {
              const { name, id } = item;
              obj[id] = name;
              return obj;
            }, {});

            const qtdMoviesExpected = (TotalResults / TotalPages) * page;
            const isListUpdated = moviesList.length < qtdMoviesExpected;
            if (isListUpdated) {
              const newMovies = results.map((item) => {
                const { genre_ids: genreIds } = item;
                const innergenre = genreIds.map(
                  (genreId) => genreObject[genreId] || null
                );
                return { ...item, genres: innergenre };
              });
              setMoviesList((oldState) => oldState.concat(newMovies));
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => console.log(error));
  }, [page]);

  return {
    movies: moviesList,
    movie,
    trends: trendsOfWeek,
    page,
    setTermSearch,
    setPage,
  };
};

export default useTheMovieDB;
