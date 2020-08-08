/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => (
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
    <Icon name="rocket" size={30} color="#900" />
  </SafeAreaView>
);
export default App;
