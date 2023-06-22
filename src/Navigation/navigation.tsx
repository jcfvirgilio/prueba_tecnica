import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {HistorialCurrency} from '../screens/DetailsScreen/HistorialCurrency';
import {CurrencyConverterScreen} from '../screens/CurrencyConverterScreen/CurrencyConverterScreen';
import {FavoritesScreen} from '../screens/FavoritesScreen/FavoritesScreen';
import {
  HISTORIAL,
  HOME,
  CURRENCY_CONVERTER,
  HOMETAB,
  FAVORITE,
} from '../constants';

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
      tabBarInactiveTintColor: '#A197B0',
      tabBarStyle: {backgroundColor: '#0A2955'},
    }}>
    <Tabs.Screen name={HOMETAB} component={StackHome} />
    <Tabs.Screen
      name={CURRENCY_CONVERTER}
      component={CurrencyConverterScreen}
    />
    <Tabs.Screen name={FAVORITE} component={FavoritesScreen} />
  </Tabs.Navigator>
);

export const NavigationTest = () => {
  return (
    <NavigationContainer>
      <AppTabsScreen />
    </NavigationContainer>
  );
};
