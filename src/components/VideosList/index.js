import React, { useState } from 'react';
import { Text, SectionList, View } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './index.styles';
import Loading from '../Loadind';
import Banner from '../Banner';

const SectionHeader = ({ name }) => (
  <View style={Styles.mainSectionHeader}>
    <Text style={Styles.headerTitle}>{name}</Text>
  </View>
);

const MoviesSectionList = ({ moviesList, askMoreMovies, navigation }) => {
  const [isLoading, setLoading] = useState(false);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  return (
    <View style={Styles.mainList}>
      <SectionList
        style={Styles.mainList}
        sections={moviesList}
        keyExtractor={(item) => item.id}
        renderItem={({ item: movie }) => {
          const { id } = movie;
          return (
            <Banner
              movie={movie}
              onPress={() => navigation.navigate('MovieDetail', { id })}
            />
          );
        }}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader name={title} />
        )}
        onScrollBeginDrag={stopLoading}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          startLoading();
          askMoreMovies();
        }}
      />
      {isLoading && <Loading />}
    </View>
  );
};

MoviesSectionList.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.shape({})),
  askMoreMovies: PropTypes.func,
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
};
MoviesSectionList.defaultProps = {
  moviesList: [],
  askMoreMovies: () => {},
  navigation: { navigate: () => {} },
};

export default MoviesSectionList;
