import React, { useState, useEffect, memo } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Proptypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('screen');
const Style = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
    marginRight: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: { width: width * 0.93, height: 500, alignSelf: 'center' },
  info: {
    flex: 1,
    padding: 5,
    paddingStart: 10,
    justifyContent: 'center',
  },
  title: { fontSize: 20, fontFamily: 'SourceSansPro-Bold', flex: 2.5 },
  tagline: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'SourceSansPro-Light',
  },
  votes: { fontSize: 25, marginTop: 10, fontFamily: 'SourceSansPro-Black' },
  containertitle: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
});

const Banner = ({ movie, hideOverview, onPress, children }) => {
  const [voteAverage, setvoteAvarage] = useState(0);
  const [title, setTitle] = useState(null);
  const [overview, setOverview] = useState(null);
  const [hasGoodVotes, setHasGoodVotes] = useState(false);
  const [urlImage, setUrlImage] = useState(null);

  const URL = 'https://image.tmdb.org/t/p/w500';
  useEffect(() => {
    if (voteAverage >= 7) {
      setHasGoodVotes(true);
    }

    if (movie) {
      const { poster_path: PosterPath } = movie;
      setUrlImage(`${URL}${PosterPath}`);
    }
  }, [movie, voteAverage]);

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setOverview(movie.overview);
      setvoteAvarage(movie.vote_average);
    }
  }, [movie]);

  return (
    <View style={Style.main}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{
            uri: urlImage,
          }}
          style={Style.image}
          resizeMode="stretch"
        />
        <View style={Style.info}>
          <View style={Style.containertitle}>
            <Text style={Style.title}>{title}</Text>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text>
                {' '}
                <Text style={Style.votes}>{voteAverage} </Text>/ 10
              </Text>
              {hasGoodVotes && <Icon name="trophy" size={30} color="#fca311" />}
            </View>
          </View>
          {!hideOverview && (
            <Text numberOfLines={5} ellipsizeMode="tail" style={Style.tagline}>
              {overview}
            </Text>
          )}
          <ScrollView>{children}</ScrollView>
        </View>
      </TouchableOpacity>
    </View>
  );
};

Banner.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string,
    overview: Proptypes.string,
    vote_average: Proptypes.number,
    poster_path: Proptypes.string,
  }),
  hideOverview: Proptypes.bool,
  onPress: Proptypes.func,
};

Banner.defaultProps = {
  movie: {
    title: null,
    overview: null,
    vote_average: 0,
    poster_path: '/744ZoymAp95NN9ZGXdXgmpxTd7H.jpg',
  },
  hideOverview: false,
  onPress: () => {},
};

export default memo(Banner);
