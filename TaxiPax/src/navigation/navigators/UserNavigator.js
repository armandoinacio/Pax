import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../components/screens/Home';
import CategoriaStreets from '../../components/screens/Home/components_home/categoria/streetCategory';
import Categoria from '../../components/screens/Home/components_home/categoria/categoria';
import Header from '../../components/screens/Home/components_home/Header';
import Mapa from '../../components/screens/Mapa';
import ConvidarAmigos from '../../components/screens/ConvidarAmigos';
import Wait from '../../components/screens/Authentication/Wait';
import LoginScreen from '../../components/screens/Authentication/LoginScreen';
import SigninScreen from '../../components/screens/Authentication/SigninScreen'
import Profile from '../../components/screens/Profile';
import SearchScreen from '../../components/screens/Search/searchScreen';
import AtmsViews from '../../components/screens/Home/components_home/categoria/AtmsView';
import ProvinceMunicipeScreen from '../../components/screens/Home/components_home/SeccaoDemaisProvincias/parts/ProvinceMunicipeScreen';
import SplashScreen from '../../components/screens/Authentication/parts/SplashScreen'
import AllOfNear from  '../../components/outhers/AtmProximos/parts/AllOfNear'

const Stack = createStackNavigator();
const UserNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // esconde o título da screen
      
      }}
      initialRouteName="Wait"
      backBehavior="exit"
       >
      
      <Stack.Screen name="HomeScreen" component={Home}  />    
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="CategoriaStreets" component={CategoriaStreets} />
      <Stack.Screen name="Categoria" component={Categoria} />
      <Stack.Screen name="Header" component={Header} />
      <Stack.Screen name="Mapa" component={Mapa} />
      <Stack.Screen name="AtmsViews" component={AtmsViews} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ConvidarAmigos" component={ConvidarAmigos} />
      <Stack.Screen name="SigninScreen" component={SigninScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="ProvinceMunicipeScreen" component={ProvinceMunicipeScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="AllOfNear" component={AllOfNear} />
  
      <Stack.Screen name="Wait" component={Wait} />
    
    </Stack.Navigator>
  );
};

export default UserNavigator;
