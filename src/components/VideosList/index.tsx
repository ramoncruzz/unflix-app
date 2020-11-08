import React, { useState } from 'react';
import { SectionList, Text, View } from 'react-native';
import Banner from '../Banner';
import Loading from '../Loadind';
import Styles from './index.styles';

interface sectionHeaderProps {
  name : string
}

const SectionHeader:React.FC<sectionHeaderProps> = ({ name }): JSX.Element => (
  <View style={Styles.mainSectionHeader}>
    <Text style={Styles.headerTitle}>{name}</Text>
  </View>
);



type navigationObj= {
  navigate: (routName: string, props: any)=> void
}

interface moviesSectionListProps {
  moviesList: Array<any>,
  askMoreMovies: ()=> void,
  navigation: navigationObj
}
const MoviesSectionList: React.FC<moviesSectionListProps> = ({ moviesList, askMoreMovies, navigation }) : JSX.Element => {
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

// MoviesSectionList.propTypes = {
//   moviesList: PropTypes.arrayOf(PropTypes.shape({})),
//   askMoreMovies: PropTypes.func,
//   navigation: PropTypes.shape({ navigate: PropTypes.func }),
// };
// MoviesSectionList.defaultProps = {
//   moviesList: [],
//   askMoreMovies: () => {},
//   navigation: { navigate: () => {} },
// };

export default MoviesSectionList;
