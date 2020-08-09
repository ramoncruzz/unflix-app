import React, { useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
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
const Home = ({ navigation }) => {
  const {
    setTermSearch,
    setPage,
    setPageTrends,
    moviesByGenre,
    trendsByGenre,
  } = useTheMovieDB();

  useEffect(() => {
    setTermSearch('Barraca');
    setPageTrends(2);
    setPageTrends(3);
  }, []);

  const askMoreMovies = () => setPage((oldPage) => oldPage + 1);
  return (
    <SafeAreaView style={Styles.main}>
      <Text> tamanho {trendsByGenre.length}</Text>
      <VideosList
        moviesList={moviesByGenre}
        askMoreMovies={askMoreMovies}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};
export default Home;
