import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import useTheMovieDB from '../../utils/hooks/useTheMovieDB';
import { VideosList } from '../../components';
import Styles from './Home.stye';

const Home = ({ navigation }) => {
  const {
    setTermSearch,
    setPage,
    setPageTrends,
    moviesByGenre,
  } = useTheMovieDB();

  // useEffect(() => {
  //   setTermSearch('Barraca');
  //   setPageTrends(2);
  //   setPageTrends(3);
  // }, []);

  const askMoreMovies = () => setPage((oldPage) => oldPage + 1);
  return (
    <SafeAreaView style={Styles.main}>
      <VideosList
        moviesList={moviesByGenre}
        askMoreMovies={askMoreMovies}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};
export default Home;
