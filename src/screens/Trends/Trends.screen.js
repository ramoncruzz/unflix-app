import React from 'react';
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

const Trends = ({ navigation }) => {
  const { setPageTrends, trendsByGenre } = useTheMovieDB();
  const askMoreTrends = () => setPageTrends((oldPage) => oldPage + 1);

  return (
    <SafeAreaView style={Styles.main}>
      <Text> tamanho {trendsByGenre.length}</Text>
      <VideosList
        moviesList={trendsByGenre}
        askMoreMovies={askMoreTrends}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};
export default Trends;
