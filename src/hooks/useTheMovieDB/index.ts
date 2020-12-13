import { useEffect, useState, useMemo } from 'react';
import {
  discover,
  genre,
  movieDetail as movieDetailEndPoint,
  trending,
  searchMovie,
} from '../../services/Themoviedb.api';

import { groupByGenre, filterNewMovies, createGenresMap } from './util';
import { movie, category } from '../../utils/types';

const useTheMovieDB = (idMovie = 0) => {
  const [moviesList, setMoviesList] = useState<Array<movie>>([]);
  const [moviesByGenre, setMoviesByGenre] = useState<Array<category>>([]);
  const [termSearch, setTermSearch] = useState<string>();
  const [searchResult, setSearchResult] = useState<Array<movie>>([]);
  const [trendsOfWeek, setTrendOfWeek] = useState<Array<movie>>([]);
  const [trendsOfWeekByGenre, setTrendOfWeekByGenre] = useState<
    Array<category>
  >([]);
  const [movieDetail, setMovieDetail] = useState<movie>();
  const [movieId, setMovieId] = useState(idMovie === 0 ? 400160 : idMovie);
  const [page, setPage] = useState(1);
  const [pageTrends, setPageTrends] = useState(1);
  const [pageSearch, setPageSearch] = useState(1);
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
    moviesCache.then((newMovies) => {
      setMoviesList((old) => old.concat(newMovies));
    });
    moviesTrendsCache.then((newTrends) => {
      setTrendOfWeek((old) => old.concat(newTrends));
    });
  }, [page, genresMap, pageTrends]);

  const searchMoviesCache = useMemo(
    () =>
      new Promise<Array<movie>>(async (resolve, reject) => {
        try {
          if (termSearch) {
            const { results } = await searchMovie(termSearch, pageSearch);
            resolve(results);
          }
        } catch (error) {
          reject(error);
        }
      }),
    [pageSearch, termSearch]
  );

  useEffect(() => {
    searchMoviesCache.then((result) => {
      setSearchResult((old) => old.concat(result));
    });
  }, [termSearch]);

  const movieDetailCache = useMemo(
    () =>
      new Promise<movie>(async (resolve, reject) => {
        try {
          const _movie = await movieDetailEndPoint(idMovie);
          resolve(_movie);
        } catch (error) {
          reject(error);
        }
      }),
    [idMovie]
  );

  useEffect(() => {
    movieDetailCache
      .then((_movie) => {
        setMovieDetail(_movie);
      })
      .catch((error) => console.log(error));
  }, [movieId]);

  useEffect(() => {
    genre().then((genres) => {
      const _genresMap = createGenresMap(genres);
      setGenreMap(_genresMap);
    });
  }, []);

  useEffect(() => {
    setMoviesByGenre(groupByGenre(genresMap, moviesList));
  }, [moviesList]);

  useEffect(() => {
    setTrendOfWeekByGenre(groupByGenre(genresMap, trendsOfWeek));
  }, [trendsOfWeek]);

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
    setPageSearch,
    setMovieId,
  };
};

export default useTheMovieDB;
