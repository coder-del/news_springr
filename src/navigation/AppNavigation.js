import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

// Screens Imports
import HomeScreen from '../components/screens/HomeScreen';
import NewsScreen from '../components/screens/NewsScreen';

const AppStack = createStackNavigator();

const AppScreens = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Home" component={HomeScreen} />
    <AppStack.Screen name="News" component={NewsScreen} />
  </AppStack.Navigator>
);

function AppNavigator() {
  return (
    <NavigationContainer>
      <AppScreens />
    </NavigationContainer>
  );
}

export default AppNavigator;
