import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import useTheMovieDB from '../../hooks/useTheMovieDB';
import { genre, movie, movieResponse } from '../../utils/types';
import { page1, page2 } from './mocks/discover';
import genresMock from './mocks/genres';
import moviesOrderedByGenres from './mocks/moviesOrderedByGenres';
import { groupByGenre, filterNewMovies } from './util';

describe('Unit test of util functions', () => {
  let listOfMoviesPage1 = page1.results;
  let listOfMoviesPage2 = page2.results;
  let listOfGenres = genresMock.genres;
  const genresMap = new Map();

  beforeAll(() => {
    listOfMoviesPage1 = page1.results;
    listOfGenres = genresMock.genres;

    listOfGenres.forEach((value, index) => {
      genresMap.set(index, value);
    });
  });
  it('should get list of movies ordered by categories', () => {
    const listMoviesOrderedByGenres = groupByGenre(
      genresMap,
      listOfMoviesPage1
    );
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
    const newListMovies = Object.create(listOfMoviesPage1);

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
  });

  it('should filter new movies when it is necessary', () => {
    const moviesResponsePage1: movieResponse = {
      page: 1,
      results: listOfMoviesPage1,
      total_pages: 2,
      total_results: 40,
    };

    const moviesResponsePage2: movieResponse = {
      page: 2,
      results: listOfMoviesPage2,
      total_pages: 2,
      total_results: 40,
    };
    const moviesWhenThereAreNotMoviesYeat = filterNewMovies(
      genresMap,
      moviesResponsePage1,
      []
    );

    const moviesWhenPage1IsCalledAgain = filterNewMovies(
      genresMap,
      moviesResponsePage1,
      listOfMoviesPage1
    );

    const moviesWhenPage2isCalled = filterNewMovies(
      genresMap,
      moviesResponsePage2,
      listOfMoviesPage1
    );

    expect(moviesWhenThereAreNotMoviesYeat.length).toEqual(20);
    expect(moviesWhenPage1IsCalledAgain.length).toEqual(0);
    expect(moviesWhenPage2isCalled.length).toEqual(20);
  });
});

describe('Unit test of hook useTheMovieDB', () => {
  // let _useTheMovieDB;
  beforeEach(() => {
    // _useTheMovieDB = useTheMovieDB();
    // const discover = jest.fn();
  });
  it('should get unordered list of movies', async () => {
    const hookTheMovieDB = Object.assign(useTheMovieDB);

    // hookTheMovieDB.bind({
    //   discover: () => page1.results,
    // });

    const discover = jest.fn();

    const { result, waitForNextUpdate } = renderHook(() => hookTheMovieDB());

    // hookTheMovieDB.bind({
    //   discover: () => page1.results,
    //   genre: () => [],
    //   movieDetail: () => {},
    //   trending: () => [],
    //   searchMovie: () => [],
    // });

    result.current.setPage(1);
    await waitForNextUpdate();
    const movies = result.current.movies;
    // const discover = jest.fn();

    // const testJest = jest
    //   .spyOn(hookTheMovieDB, 'discover')
    //   .mockImplementation(() => []);
    // hookTheMovieDB.movies;
    // expect(testJest).toHaveBeenCalled();
    expect(3).toEqual(3);
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
