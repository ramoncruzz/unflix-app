import { genre, movie, category, movieResponse } from '../../utils/types';

export const groupByGenre = (
  mapGenres?: Map<number, string>,
  listMovies: Array<movie> = []
): Array<category> => {
  const _moviesByGenre = Array<category>();

  if (!!mapGenres) {
    mapGenres.forEach((value) => {
      const { id, name } = JSON.parse(JSON.stringify(value));
      const data = listMovies.filter((movie) => {
        const { genre_ids: genreIds } = movie;
        return (genreIds || []).some((item: number) => item === id);
      });

      if (data.length > 0) {
        _moviesByGenre.push({
          id,
          title: name,
          data,
        });
      }
    });
  }

  return _moviesByGenre;
};

export const createGenresMap = (
  listOfGenrer: Array<genre>
): Map<number, string> => {
  const _genresMap = new Map<number, string>();

  listOfGenrer.reduce((obj, item) => {
    const { name, id } = item;
    obj.set(id, name);
    return obj;
  }, _genresMap);

  return _genresMap;
};

export const filterNewMovies = (
  _genresMap: Map<number, string>,
  _movieResponse: movieResponse,
  _moviesCached: Array<movie>
): Array<movie> => {
  const {
    page,
    results,
    total_pages: totalPages,
    total_results: totalResults,
  } = _movieResponse;
  const qtdMoviesExpected = (totalResults / totalPages) * page;
  const needUpdateCachedList = _moviesCached.length < qtdMoviesExpected;

  if (needUpdateCachedList) {
    const newMovies = results.map((item) => {
      const { genre_ids: genreIds } = item;
      const genreNames = genreIds?.map((genreId) => _genresMap.get(genreId));
      return { ...item, genres: genreNames };
    });
    return newMovies;
  }
  return [];
};
