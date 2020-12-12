import { useEffect, useState, useMemo } from 'react';
import {
  discover,
  genre,
  movieDetail as movieDetailEndPoint,
  searchMovie,
  trending,
} from '../../services/Themoviedb.api';

import { groupByGenre, filterNewMovies, createGenresMap } from './util';
import {
  genre as genreType,
  movie,
  category,
  movieResponse,
} from '../../utils/types';

const useTheMovieDB = (idMovie = 0) => {
  const [moviesList, setMoviesList] = useState<Array<movie>>([]);
  const [moviesByGenre, setMoviesByGenre] = useState<Array<category>>([]);
  const [genreList, setGenreList] = useState<Array<genreType>>([]);
  const [termSearch, setTermSearch] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [trendsOfWeek, setTrendOfWeek] = useState<Array<movie>>([]);
  const [trendsOfWeekByGenre, setTrendOfWeekByGenre] = useState<
    Array<category>
  >([]);
  const [movieDetail, setMovieDetail] = useState(null);
  const [movieId, setMovieId] = useState(idMovie === 0 ? 400160 : idMovie);
  const [page, setPage] = useState(1);
  const [pageTrends, setPageTrends] = useState(1);
  const [genresMap, setGenreMap] = useState<Map<number, string>>();

  const moviesCache = useMemo(
    () =>
      new Promise<Array<movie>>(async (resolve, reject) => {
        try {
          if (genresMap) {
            const _movies = await discover(page);
            const newMovies = filterNewMovies(genresMap, _movies, moviesList);
            resolve(newMovies);
          }
        } catch (error) {
          reject(error);
        }
      }),
    [page, genresMap]
  );

  const moviesTrendsCache = useMemo(
    () =>
      new Promise<Array<movie>>(async (resolve, reject) => {
        try {
          if (genresMap) {
            const _movies = await trending(page);
            const newMovies = filterNewMovies(genresMap, _movies, moviesList);
            resolve(newMovies);
          }
        } catch (error) {
          reject(error);
        }
      }),
    [pageTrends, genresMap]
  );

  useEffect(() => {
    genre().then((genres) => {
      const _genresMap = createGenresMap(genres);
      setGenreMap(_genresMap);
    });
  }, []);

  useEffect(() => {
    moviesCache.then((newMovies) => {
      setMoviesList((old) => old.concat(newMovies));
    });
    moviesTrendsCache.then((newTrends) => {
      setTrendOfWeek((old) => old.concat(newTrends));
    });
  }, [page, genresMap, pageTrends]);

  useEffect(() => {
    setMoviesByGenre(groupByGenre(genresMap, moviesList));
  }, [moviesList]);

  useEffect(() => {
    setTrendOfWeekByGenre(groupByGenre(genresMap, trendsOfWeek));
  }, [trendsOfWeek]);

  // useEffect(() => {
  //   searchMovie(termSearch)
  //     .then((results) => {
  //       setSearchResult(results);
  //     })
  //     .catch((error) => console.log(error));
  // }, [termSearch]);

  // useEffect(() => {
  //   movieDetailEndPoint(movieId)
  //     .then((_movie) => {
  //       setMovieDetail(_movie);
  //     })
  //     .catch((error) => console.log(error));
  // }, [movieId]);

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
