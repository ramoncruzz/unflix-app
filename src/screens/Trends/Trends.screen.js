import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';

const Trends = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: 'tomato' }}>
    <StatusBar backgroundColor="red" />
    <Text>Tendencias</Text>
  </SafeAreaView>
);

export default Trends;
