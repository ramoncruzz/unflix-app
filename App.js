/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';

const App = () => (
  <SafeAreaView
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
  >
    <StatusBar backgroundColor="orange" />
    <Text> UNFLIX </Text>
    <Text> Aplicativo de filmes </Text>
  </SafeAreaView>
);
export default App;
