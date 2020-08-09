import React from 'react';
import { FontAwesome } from 'react-native-vector-icons';
import PropTypes from 'prop-types';

const Tabbar = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    if (route.name === 'Filmes') {
      iconName = focused ? 'rocket' : 'ios-information-circle-outline';
    } else if (route.name === 'Tendências') {
      iconName = focused ? 'ios-list-box' : 'ios-list';
    }

    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});

Tabbar.propTypes = {
  route: PropTypes.shape({
    name: PropTypes.string,
    key: PropTypes.string,
    params: PropTypes.shape({}),
  }).isRequired,
};

export default Tabbar;
