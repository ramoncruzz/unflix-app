import axios from 'axios';
import Env from './Env';

const BASE_URL = 'https://api.themoviedb.org/3';
const ACCESS_API = `Bearer ${Env.tokenTheMoviedb}`;

const { CancelToken } = axios;
let cancel;

const TheMovieDB = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: ACCESS_API,
  },
});

const userLocale = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('pt-BR');
    }, 100);
  });

const interceptorRequest = async (config) => {
  try {
    if (cancel) {
      return null;
    }
    const locale = await userLocale();
    const { params } = config;

    if (params) {
      config.params = { ...params, language: locale };
    } else {
      config.params = { language: locale };
    }

    config.cancelToken = new CancelToken((value) => {
      cancel = value;
    });
    return config;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const interceptorSuccess = (response) => {
  try {
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const interceptorFail = (response) => {
  try {
    const { message } = response;
    return message;
  } catch (error) {
    console.log(error);
  }
};

TheMovieDB.interceptors.request.use(interceptorRequest);
TheMovieDB.interceptors.response.use(interceptorSuccess, interceptorFail);

export default TheMovieDB;
