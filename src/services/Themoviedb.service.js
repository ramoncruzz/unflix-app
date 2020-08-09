import axios from 'axios';
import Env from './Env';
import { RNLocale } from '../NativeModules';

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
    try {
      RNLocale.getLocale().then((locale) => resolve(locale));
    } catch (error) {
      console.log(error);
      resolve('pt');
    }
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
    config.cancelToken = CancelToken.source().token;
    return config;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
const interceptorSuccess = (response) => {
  try {
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

TheMovieDB.interceptors.request.use(interceptorRequest);
TheMovieDB.interceptors.response.use(interceptorSuccess);

export default TheMovieDB;
