import service from './Themoviedb.service';

const trends = () =>
  new Promise(async (resolve, reject) => {
    try {
      const resultado = await service.get('/genre/movie/list');
      debugger;
    } catch (error) {
      reject(error);
    }
  });
const movieDetail = () =>
  new Promise((resolve) => {
    resolve(true);
  });

export { trends, movieDetail };
