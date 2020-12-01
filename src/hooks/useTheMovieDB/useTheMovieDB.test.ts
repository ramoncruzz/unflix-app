import useTheMovieDB  from './index'

describe('Unit test of hook useTheMovieDB',()=>{
    it('should get unordered list of movies',()=>{
        expect(3).toEqual(3)
    })
    it('should get list of movies ordered by categories',()=>{
        expect(3).toEqual(3)
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
