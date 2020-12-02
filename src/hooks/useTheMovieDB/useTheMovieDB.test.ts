import useTheMovieDB  from './index'
import { groupByGenre } from './util'
import  genresMock from './mocks/genres'
import  discoverMock from './mocks/discover'
import moviesOrderedByGenres from './mocks/moviesOrderedByGenres'
import { movie, genre } from '../../utils/types'

describe('Unit test of hook useTheMovieDB',()=>{
    it('should get unordered list of movies',()=>{
        expect(3).toEqual(3)
    })
    it('should get list of movies ordered by categories',()=>{

        const listOfMovies = discoverMock.results;
        const listOfGenres = genresMock.genres;
        const listMoviesOrderedByGenres = groupByGenre(listOfGenres,listOfMovies)
        expect(moviesOrderedByGenres).toEqual(listMoviesOrderedByGenres)

        const newMovie: movie = {
            id: 2020202,
            title: "New Movie",
            genre_ids: [3030]
        }; 

        const newGenre: genre = {
            id: 3030,
            name: "New Category"
        };

        const newListOfGenres = Object.create(listOfGenres)
        const newListMovies = Object.create(listOfMovies)

        newListMovies.push(newMovie);
        newListOfGenres.push(newGenre);

        const newlistMoviesOrderedByGenres = groupByGenre(newListOfGenres,newListMovies)

        expect(moviesOrderedByGenres.length).toBeLessThan(newlistMoviesOrderedByGenres.length)
        expect(newlistMoviesOrderedByGenres.filter(item => item.title ==="New Category").length).toEqual(1)

        const [newCategoryInnerList] = newlistMoviesOrderedByGenres.filter(item => item.title ==="New Category")
        expect(newCategoryInnerList.data.length).toEqual(1)

        

    })

    it('should get list of movies filtered by name of movie',()=>{
        expect(3).toEqual(3)
    })

    it('should get list of trends',()=>{
        expect(3).toEqual(3)
    })

    it('should get list of trends ordered by categories',()=>{
        expect(3).toEqual(3)
    })

    it('should get list of movies by request api and local cache',()=>{
        expect(3).toEqual(3)
    })

    it('should save cache of movies',()=>{
        expect(3).toEqual(3)
    })

    it('should clean up cache of movies',()=>{
        expect(3).toEqual(3)
    })
})
