import { useEffect, useState } from 'react';
import {
  discover,
  genre, movieDetail as movieDetailEndPoint,
  searchMovie, trending
} from '../services/Themoviedb.api';

const groupByGenre = (listGenre, listMovies) => {
  // eslint-disable-next-line no-underscore-dangle
  const _moviesByGenre = [];
  listGenre.forEach((genreItem) => {
    const { id, name } = genreItem;
    const data = listMovies.filter((movie) => {
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
  return _moviesByGenre;
};

const useTheMovieDB = (idMovie = 0) => {
  const [moviesList, setMoviesList] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [termSearch, setTermSearch] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [trendsOfWeek, setTrendOfWeek] = useState([]);
  const [trendsOfWeekByGenre, setTrendOfWeekByGenre] = useState([]);
  const [movieDetail, setMovieDetail] = useState(null);
  const [movieId, setMovieId] = useState(idMovie === 0 ? 400160 : idMovie);
  const [page, setPage] = useState(1);
  const [pageTrends, setPageTrends] = useState(1);

  useEffect(() => {
    genre().then((_genres) => {
      const { genres } = _genres;
      trending(pageTrends)
        .then((_trends) => {
          const {
            total_results: TotalResults,
            total_pages: TotalPages,
            results,
          } = _trends;
          const genreObject = genres.reduce((obj, item) => {
            const { name, id } = item;
            obj[id] = name;
            return obj;
          }, {});
          const qtdMoviesExpected = (TotalResults / TotalPages) * pageTrends;
          const isListUpdated = moviesList.length < qtdMoviesExpected;
          if (isListUpdated) {
            const newMovies = results.map((item) => {
              const { genre_ids: genreIds } = item;
              const innergenre = genreIds.map(
                (genreId) => genreObject[genreId] || null
              );
              return { ...item, genres: innergenre };
            });
            setTrendOfWeek((oldState) => oldState.concat(newMovies));
          }
        })
        .catch((error) => console.log(error));
    });
  }, [pageTrends]);

  useEffect(() => {
    setMoviesByGenre(groupByGenre(genreList, moviesList));
  }, [moviesList]);

  useEffect(() => {
    setTrendOfWeekByGenre(groupByGenre(genreList, trendsOfWeek));
  }, [trendsOfWeek]);

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
    trendsByGenre: trendsOfWeekByGenre,
    page,
    searchResult,
    moviesByGenre,
    setTermSearch,
    setPage,
    setPageTrends,
    setMovieId,
  };
};

export default useTheMovieDB;
