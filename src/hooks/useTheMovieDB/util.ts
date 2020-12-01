


export const groupByGenre = (listGenre: Array<any>, listMovies: Array<any>): Array<any> => {
    
    const _moviesByGenre = Array<any>();
    listGenre.forEach((genreItem) => {
      const { id, name } = genreItem;
      const data = listMovies.filter((movie) => {
        const { genre_ids: genreIds } = movie;
        return genreIds.some((item: any) => item === id);
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

