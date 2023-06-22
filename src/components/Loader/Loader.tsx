/** Este código está definiendo un componente de React llamado Loader que muestra un indicador de actividad (una rueda giratoria) en el centro de la pantalla.

 *  El StyleSheet se utiliza para definir estilos para el componente View que envuelve al ActivityIndicator. El objeto styles define dos estilos: container y horizontal. El estilo container centra vertical y horizontalmente el componente View, mientras que el estilo horizontal coloca el ActivityIndicator y cualquier otro componente hijo en una fila con espaciado igual.

El componente Loader retorna el componente View con el ActivityIndicator **/
import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';

export const Loader = () => {
  return (
    <View style={[styles.container, styles.hoizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hoizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
