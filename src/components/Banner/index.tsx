import React, { memo, useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './index.style';
import { Title, Vote } from './styled';


type Movie = {
  title: string,
  overview: string,
  vote_average: number,
  poster_path: string
}
interface IBannerProps {
  movie: Movie,
  hideOverview?: boolean,
  onPress: ()=>void
}


const Banner: React.FC<IBannerProps> = ({ movie, hideOverview, onPress, children }): JSX.Element => {
  const [voteAverage, setvoteAvarage] = useState<number>(0);
  const [title, setTitle] = useState<string>();
  const [overview, setOverview] = useState<string>();
  const [hasGoodVotes, setHasGoodVotes] = useState(false);
  const [urlImage, setUrlImage] = useState<string>();

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
            <Title style={Style.title}>{title}</Title>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text>
                {' '}
                <Vote style={Style.votes}>{voteAverage} </Vote>/ 10
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

// Banner.propTypes = {
//   movie: Proptypes.shape({
//     title: Proptypes.string,
//     overview: Proptypes.string,
//     vote_average: Proptypes.number,
//     poster_path: Proptypes.string,
//   }),
//   hideOverview: Proptypes.bool,
//   onPress: Proptypes.func,
// };

// Banner.defaultProps = {
//   movie: {
//     title: null,
//     overview: null,
//     vote_average: 0,
//     poster_path: '/744ZoymAp95NN9ZGXdXgmpxTd7H.jpg',
//   },
//   hideOverview: false,
//   onPress: () => {},
// };

export default memo(Banner);
