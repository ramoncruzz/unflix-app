import React, { useEffect } from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import useTheMovieDB from '../../utils/hooks/useTheMovieDB';

const Home = () => {
  const { movies, movieDetail, setTermSearch } = useTheMovieDB();
  useEffect(() => {
    setTermSearch('Barraca');
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <StatusBar backgroundColor="orange" />
      <Text
        style={{
          fontFamily: 'BebasNeue-Regular',
          fontSize: 60,
          fontWeight: 'bold',
        }}
      >
        {' '}
        UNFLIX{' '}
      </Text>
      <Text style={{ fontFamily: 'SourceSansPro-ExtraLightItalic' }}>
        Aplicativo de filmes
      </Text>
      <Text> QTD: {movies.length}</Text>
      <Text>{movieDetail ? movieDetail.original_title : 'vazio'}</Text>
      <Icon name="rocket" size={30} color="#900" />
      {/* <LottieView source={loadding} autoPlay loop={false} /> */}
    </SafeAreaView>
  );
};
export default Home;
