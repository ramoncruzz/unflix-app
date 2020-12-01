import {genre, movie, category} from './types'

export const groupByGenre = (listGenre: Array<genre>, listMovies: Array<movie>): Array<any> => {
    
    const _moviesByGenre = Array<category>();
    listGenre.forEach((genreItem) => {
      const { id, name } = genreItem;
      const data = listMovies.filter((movie) => {
        const { genre_ids: genreIds } = movie;
        return  (genreIds || []).some((item: number) => item === id);
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

