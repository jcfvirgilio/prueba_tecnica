/* Este es un componente de React llamado `ExchangeRate` que muestra una lista de tasas de cambio para diferentes
monedas. Importa varios componentes y funciones de React y otros archivos, incluyendo los
hooks `useState` y `useEffect` para gestionar el estado y los efectos secundarios, y una función `dataFixer` para
obtener datos de tasas de cambio desde el API de fixer. El componente renderiza un encabezado con la fecha de última actualización
y un botón para actualizar los datos, seguido de una tabla de tasas de cambio utilizando el componente `FlatList`
y un componente personalizado `ItemExchange`. El componente también define algunos estilos utilizando la API `StyleSheet`. */
import React, {useState, useEffect} from 'react';
import {ItemExchange} from '../ItemExchange/ItemExchange';
import {dataFixer} from '../../API/AllExchange/dataFixer';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

export const ExchangeRate = () => {
  const [lastUpdated, setLastUpdated] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const {exchangeRatesResult, dateResult} = await dataFixer();
    setLastUpdated(dateResult);
    setData(
      Object.entries(exchangeRatesResult).map(([title, currency]) => ({
        title,
        currency,
      })),
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.itemContainerLasUpdated}>
        <Text>Última actualización: {lastUpdated}</Text>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => getData()}>
          <Text style={styles.appButtonText}>Actualizar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.itemHeader}>
        <Text style={styles.itemTextTitle}>Moneda</Text>
        <Text style={styles.itemTextTitle}>Tipo de Cambio</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return <ItemExchange title={item.title} currency={item.currency} />;
        }}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    marginBottom: 25,
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
