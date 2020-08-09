import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  Button,
  StyleSheet,
  SectionList,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import useTheMovieDB from '../../utils/hooks/useTheMovieDB';
import { VideosList } from '../../components';

const Styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#edf6f9',
  },
});

const Home = () => {
  const {
    movies,
    movieDetail,
    setTermSearch,
    setPage,
    moviesByGenre,
  } = useTheMovieDB();

  // useEffect(() => {
  //   setTermSearch('Barraca');

  //   const tete = props;
  // }, []);

  const askMoreMovies = () => setPage((oldPage) => oldPage + 1);
  return (
    <SafeAreaView style={Styles.main}>
      <VideosList moviesList={moviesByGenre} askMoreMovies={askMoreMovies} />
    </SafeAreaView>
  );
};
export default Home;
