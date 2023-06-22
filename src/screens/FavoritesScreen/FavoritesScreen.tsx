/* Este es un componente de React en TypeScript que renderiza una pantalla para mostrar una lista de tasas de cambio de moneda favoritas.
Importa componentes y funciones necesarios de React, React Native y otros componentes y funciones personalizados.
Utiliza los hooks useState y useEffect para gestionar el estado y realizar efectos secundarios, respectivamente.
También utiliza el componente FlatList para renderizar la lista de tasas de cambio de moneda favoritas. define algunos estilos utilizando la API de StyleSheet. */
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {ItemFavorite} from '../../components/ItemFavorite/ItemFavorite';
import {getAllKeys} from '../../store/store';

export const FavoritesScreen = () => {
  const [data, setData] = useState<[string, string]>([]);

  useEffect(() => {
    handlerGetData();
  }, [data]);

  const handlerGetData = async () => {
    const resultData = await getAllKeys();
    setData(resultData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemTextTitle}>Moneda</Text>
        <Text style={styles.itemTextTitle}>Tipo de Cambio</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <ItemFavorite key={item[0]} title={item[0]} currency={item[1]} />
          );
        }}
        keyExtractor={item => item[0]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    padding: 10,
  },

  itemContainerLasUpdated: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTextTitle: {
    fontSize: 15,
    fontWeight: '800',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
