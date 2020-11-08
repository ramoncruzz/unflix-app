import React from 'react';
import { SafeAreaView } from 'react-native';
import { VideosList } from '../../components';
import useTheMovieDB from '../../utils/hooks/useTheMovieDB';
import Styles from './Trends.styles';


const Trends = ({ navigation }) => {
  const { setPageTrends, trendsByGenre } = useTheMovieDB();
  const askMoreTrends = () => setPageTrends((oldPage) => oldPage + 1);

  return (
    <SafeAreaView style={Styles.main}>
      <VideosList
        moviesList={trendsByGenre}
        askMoreMovies={askMoreTrends}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};
export default Trends;
