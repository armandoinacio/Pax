import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../components/screens/Home/index'
import MapaScreen from '../../components/screens/Mapa/index'
import StreetCategory from  '../../components/screens/Home/components_home/categoria/streetCategory';
import Categoria from '../../components/screens/Home/components_home/categoria/categoria';
import { usePusher } from '../../components/screens/usePusher';
const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>    
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Categoria" component={Categoria}/>
        <Stack.Screen name="MapaScreen" component={MapaScreen}/>
        <Stack.Screen name="StreetCategory" component={StreetCategory}/>
     
    </Stack.Navigator>
  );
};

export default HomeNavigator;
