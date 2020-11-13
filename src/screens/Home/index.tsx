import React from 'react';
import { SafeAreaView } from 'react-native';
import { VideosList } from '../../components';
import useTheMovieDB from '../../hooks/useTheMovieDB';
import Styles from './Home.stye';

type HomeProps ={
  navigation: any
}

const Home: React.FC<HomeProps> = ({ navigation }): JSX.Element => {
  const {
    setPage,
    moviesByGenre,
  } = useTheMovieDB();

  // useEffect(() => {
  //   setTermSearch('Barraca');
  //   setPageTrends(2);
  //   setPageTrends(3);
  // }, []);

  const askMoreMovies = () => setPage((oldPage: number) => oldPage + 1);
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
