import React from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native';

const loadinLottie = require('../../../lottiefiles/loading2.json');

const Loading = () => (
  <View
    style={{
      flex: 0.1,
      alignContent: 'center',
      alignItems: 'center',
    }}
  >
    <Lottie
      source={loadinLottie}
      autoPlay
      hardwareAccelerationAndroid
      resizeMode="center"
      loop
    />
  </View>
);
export default Loading;
