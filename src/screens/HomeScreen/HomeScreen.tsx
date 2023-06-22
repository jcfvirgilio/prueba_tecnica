/* Este es un código TypeScript de React que define un componente funcional llamado `HomeScreen`. Importa
`React`, `SafeAreaView` y `StyleSheet` de la biblioteca `react-native`. También importa otro
componente llamado `ExchangeRate` desde un archivo local. El componente `HomeScreen` devuelve un
componente `SafeAreaView` con un estilo definido en el objeto `styles`. Dentro del `SafeAreaView`,
renderiza el componente `ExchangeRate`. El objeto `styles` define los estilos para el componente `SafeAreaView`. */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {ExchangeRate} from '../../components/ExchangeRate/ExchangeRate';

export const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ExchangeRate />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    marginLeft: 10,
  },
});
