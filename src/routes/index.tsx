import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import HomeScreen from '../screens/Home';
import MovieDetailScreen from '../screens/MovieDetail';
import TrendsScreen from '../screens/Trends';

type RootStackParams ={
  Home: undefined,
  MovieDetail : undefined,
  Trends: undefined
}

const optionsNavitagionMaker=(title?: string): StackNavigationOptions=>{
 
  return {
    title: title = 'UNFLIX',
    headerStyle: {
      backgroundColor: '#19ABC2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 40,
      fontFamily: 'BebasNeue-Regular',
    },
  }

}

const Stack = createStackNavigator<RootStackParams>();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={
        optionsNavitagionMaker()
      }
    />
    <Stack.Screen
      name="Trends"
      component={TrendsScreen}
      options={
        optionsNavitagionMaker('Tendências') 
      }
    />
    <Stack.Screen
      name="MovieDetail"
      component={MovieDetailScreen}
      options={
        optionsNavitagionMaker('Detalhe') 
    }
    />
  </Stack.Navigator>
);

const TendenciasStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Trends"
      component={TrendsScreen}
      options={
        optionsNavitagionMaker('Tendências') 
      }
    />
    <Stack.Screen
      name="MovieDetail"
      component={MovieDetailScreen}
      options={optionsNavitagionMaker('Detalhe') }
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
