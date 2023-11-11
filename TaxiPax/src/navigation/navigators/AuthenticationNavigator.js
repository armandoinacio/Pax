import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import SplashScreen from '../../components/screens/Authentication/parts/SplashScreen';
import LoginScreen from '../../components/screens/Authentication/LoginScreen';
import Menu from '../../components/screens/Home/components_home/Menu';
import SigninScreen from '../../components/screens/Authentication/SigninScreen'
import Wait from '../../components/screens/Authentication/Wait';
const Stack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SigninScreen" component={SigninScreen} />   
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Wait" component={Wait} />
      </Stack.Navigator>
  );
};

export default AuthenticationNavigator;
