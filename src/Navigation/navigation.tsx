import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {HistorialCurrency} from '../screens/Details/HistorialCurrency';
import {HISTORIAL, HOME} from '../constants';

const Stack = createNativeStackNavigator();

export const NavigationTest = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={HOME} component={HomeScreen} />
        <Stack.Screen name={HISTORIAL} component={HistorialCurrency} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
