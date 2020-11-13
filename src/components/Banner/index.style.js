import { Dimensions, StyleSheet } from 'react-native';

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
export default Style;
