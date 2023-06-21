import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {HistorialCurrency} from '../screens/DetailsScreen/HistorialCurrency';
import {CurrencyConverterScreen} from '../screens/CurrencyConverterScreen/CurrencyConverterScreen';
import {HISTORIAL, HOME, CURRENCY_CONVERTER} from '../constants';

const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

const StackHome = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={HOME}
      component={HomeScreen}
      options={{
        headerTitle: 'Tipos de Cambios Actuales - MXN',
      }}
    />
    <Stack.Screen
      name={HISTORIAL}
      component={HistorialCurrency}
      options={{
        headerTitle: 'Historial',
      }}
    />
  </Stack.Navigator>
);

const AppTabsScreen = () => (
  <Tabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#A8F49A',
      tabBarInactiveTintColor: '#6F3635',
      tabBarStyle: {backgroundColor: '#9C9523'},
    }}>
    <Tabs.Screen name={HOME} component={StackHome} />
    <Tabs.Screen
      name={CURRENCY_CONVERTER}
      component={CurrencyConverterScreen}
    />
  </Tabs.Navigator>
);

export const NavigationTest = () => {
  return (
    <NavigationContainer>
      <AppTabsScreen />
    </NavigationContainer>
  );
};
