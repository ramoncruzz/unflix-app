import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import HomeScreen from '../screens/Home/Home.screen';
import MovieDetailScreen from '../screens/MovieDetail/MovieDetail.screen';
import TrendsScreen from '../screens/Trends/Trends.screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'UNFLIX',
        headerStyle: {
          backgroundColor: '#19ABC2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          fontFamily: 'BebasNeue-Regular',
        },
      }}
    />
    <Stack.Screen
      name="Trends"
      component={TrendsScreen}
      options={{
        title: 'Tendências',
        headerStyle: {
          backgroundColor: '#19ABC2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          fontFamily: 'BebasNeue-Regular',
        },
      }}
    />
    <Stack.Screen
      name="MovieDetail"
      component={MovieDetailScreen}
      options={{
        title: 'Detalhe',
        headerStyle: {
          backgroundColor: '#19ABC2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          fontFamily: 'BebasNeue-Regular',
        },
      }}
    />
  </Stack.Navigator>
);

const TendenciasStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Trends"
      component={TrendsScreen}
      options={{
        title: 'Tendências',
        headerStyle: {
          backgroundColor: '#19ABC2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          fontFamily: 'BebasNeue-Regular',
        },
      }}
    />
    <Stack.Screen
      name="MovieDetail"
      component={MovieDetailScreen}
      options={{
        title: 'Detalhe',
        headerStyle: {
          backgroundColor: '#19ABC2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          fontFamily: 'BebasNeue-Regular',
        },
      }}
    />
  </Stack.Navigator>
);
function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Filmes" component={HomeStack} />
        <Tab.Screen name="Tendências" component={TendenciasStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
