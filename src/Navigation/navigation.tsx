/* Este código está importando los módulos y componentes necesarios de la biblioteca React Navigation para crear un sistema de navegación para una aplicación móvil. Define un navegador de tipo stack y un navegador de pestañas inferiores, y configura las pantallas que se mostrarán dentro de esos navegadores. El componente `NavigationTest` es el componente de nivel superior que envuelve todo el sistema de navegación dentro de un `NavigationContainer`. */
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
import {Image, StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

const StackHome = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={HOME}
      component={HomeScreen}
      options={{
        title: 'Tipos de Cambios',
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
      tabBarActiveTintColor: '#A8F49A',
      tabBarInactiveTintColor: '#A197B0',
      tabBarStyle: {backgroundColor: '#0A2955'},
    }}>
    <Tabs.Screen
      name={HOMETAB}
      component={StackHome}
      options={{
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let icon = focused
            ? require('./img/home-activate.png')
            : require('./img/home.png');
          return <Image source={icon} style={styles.imageTab} />;
        },
      }}
    />
    <Tabs.Screen
      name={CURRENCY_CONVERTER}
      component={CurrencyConverterScreen}
      options={{
        title: 'Convertir Moneda',
        tabBarIcon: ({focused, color, size}) => {
          let icon = focused
            ? require('./img/exchange-activate.png')
            : require('./img/exchange.png');
          return <Image source={icon} style={styles.imageTab} />;
        },
      }}
    />
    <Tabs.Screen
      name={FAVORITE}
      component={FavoritesScreen}
      options={{
        title: 'Favoritos',
        tabBarIcon: ({focused, color, size}) => {
          let icon = focused
            ? require('./img/heart-activate.png')
            : require('./img/heart.png');
          return <Image source={icon} style={styles.imageTab} />;
        },
      }}
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

const styles = StyleSheet.create({
  imageTab: {
    width: 25,
    height: 25,
  },
});
