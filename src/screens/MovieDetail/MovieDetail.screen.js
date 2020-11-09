import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Banner } from '../../components';
import useTheMovieDB from '../../hooks/useTheMovieDB';

const Styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#edf6f9',
  },
  title: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'SourceSansPro-Italic',
  },
  textBody: { marginTop: 5, fontSize: 15, fontFamily: 'SourceSansPro-Italic' },
});
const MoviewDetail = ({ route }) => {
  const { setMovieId, movieDetail } = useTheMovieDB();

  useEffect(() => {
    const { id } = route.params;
    setMovieId(id);
  }, []);

  return (
    <SafeAreaView style={Styles.main}>
      <ScrollView>
        <Banner hideOverview movie={movieDetail}>
          {movieDetail && (
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={Styles.textBody}>{movieDetail.overview}</Text>
              <Text style={Styles.title}>Lançamento</Text>
              <Text style={Styles.text}>{movieDetail.release_date}</Text>
              <Text style={Styles.title}>Título original</Text>
              <Text style={Styles.textBody}>{movieDetail.original_title}</Text>
            </View>
          )}
        </Banner>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MoviewDetail;
