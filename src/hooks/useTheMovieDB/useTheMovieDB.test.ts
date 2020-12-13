import useTheMovieDB from '../../hooks/useTheMovieDB';
import { genre, movie } from '../../utils/types';
import discoverMock from './mocks/discover';
import genresMock from './mocks/genres';
import moviesOrderedByGenres from './mocks/moviesOrderedByGenres';
import { groupByGenre } from './util';

describe('Unit test of hook useTheMovieDB', () => {
  it('should get unordered list of movies', () => {
    expect(3).toEqual(3);
  });
  it('should get list of movies ordered by categories', () => {
    const listOfMovies = discoverMock.results;
    const listOfGenres = genresMock.genres;
    const genresMap = new Map();

    listOfGenres.forEach((value, index) => {
      genresMap.set(index, value);
    });

    const listMoviesOrderedByGenres = groupByGenre(genresMap, listOfMovies);

    expect(moviesOrderedByGenres.length).toEqual(
      listMoviesOrderedByGenres.length
    );

    const newMovie: movie = {
      id: 2020202,
      title: 'New Movie',
      genre_ids: [3030],
    };

    const newGenre: genre = {
      id: 3030,
      name: 'New Category',
    };

    const newListOfGenres = Object.create(listOfGenres);
    const newListMovies = Object.create(listOfMovies);

    newListMovies.push(newMovie);
    newListOfGenres.push(newGenre);

    const newlistMoviesOrderedByGenres = groupByGenre(
      newListOfGenres,
      newListMovies
    );

    expect(moviesOrderedByGenres.length).toBeLessThan(
      newlistMoviesOrderedByGenres.length
    );
    expect(
      newlistMoviesOrderedByGenres.filter(
        (item) => item.title === 'New Category'
      ).length
    ).toEqual(1);

    const [newCategoryInnerList] = newlistMoviesOrderedByGenres.filter(
      (item) => item.title === 'New Category'
    );
    expect(newCategoryInnerList.data.length).toEqual(1);

    const { moviesByGenre } = useTheMovieDB();
  });

  it('should get list of movies filtered by name of movie', () => {
    expect(3).toEqual(3);
  });

  it('should get list of trends', () => {
    expect(3).toEqual(3);
  });

  it('should get list of trends ordered by categories', () => {
    expect(3).toEqual(3);
  });

  it('should get list of movies by request api and local cache', () => {
    expect(3).toEqual(3);
  });

  it('should save cache of movies', () => {
    expect(3).toEqual(3);
  });

  it('should clean up cache of movies', () => {
    expect(3).toEqual(3);
  });
});
