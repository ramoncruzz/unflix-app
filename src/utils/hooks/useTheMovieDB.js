import { useState, useEffect } from 'react';
import {
  movieDetail as movieDetailEndPoint,
  discover,
  trending,
  genre,
  searchMovie,
} from '../../services/Themoviedb.api';

const useTheMovieDB = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [termSearch, setTermSearch] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [trendsOfWeek, setTrendOfWeek] = useState([]);
  const [movieDetail, setMovieDetail] = useState(null);
  const [movieId, setMovieId] = useState(400160);
  const [page, setPage] = useState(1);

  useEffect(() => {
    trending()
      .then((_trends) => {
        setTrendOfWeek(_trends);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    const _moviesByGenre = [];
    genreList.forEach((genreItem) => {
      const { id, name } = genreItem;
      const data = moviesList.filter((movie) => {
        const { genre_ids: genreIds } = movie;
        return genreIds.some((item) => item === id);
      });
      if (data.length > 0) {
        _moviesByGenre.push({
          id,
          title: name,
          data,
        });
      }
    });
    setMoviesByGenre(_moviesByGenre);
  }, [moviesList]);

  useEffect(() => {
    searchMovie(termSearch)
      .then((results) => {
        setSearchResult(results);
      })
      .catch((error) => console.log(error));
  }, [termSearch]);

  useEffect(() => {
    movieDetailEndPoint(movieId)
      .then((_movie) => {
        setMovieDetail(_movie);
      })
      .catch((error) => console.log(error));
  }, [movieId]);

  useEffect(() => {
    genre()
      .then((_genrer) => {
        const { genres } = _genrer;
        if (genreList.length <= genres.length) {
          setGenreList(genres);
        }
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
    movieDetail,
    trends: trendsOfWeek,
    page,
    searchResult,
    moviesByGenre,
    setTermSearch,
    setPage,
    setMovieId,
  };
};

export default useTheMovieDB;
