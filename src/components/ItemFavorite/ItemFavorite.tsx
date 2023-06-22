/**
 Este es un componente de React en TypeScript que muestra un elemento con un título y una moneda, y permite al usuario eliminarlo de favoritos o ver sus datos históricos.
@property {string} currency - Una cadena que representa el código de moneda (por ejemplo, USD, EUR, MXN) para la tasa de cambio que se muestra en el componente.
@property {string} title - Una cadena que representa el título del elemento que se mostrará en el componente.
 */
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {HISTORIAL} from '../../constants';
import {deleteItem} from '../../store/store';

type ExchangeRateProps = {
  currency: string;
  title: string;
};

export const ItemFavorite = ({title, currency}: ExchangeRateProps) => {
  const navigation = useNavigation();

  const handleDetailHistorial = (titleName: string) => {
    navigation.navigate(HISTORIAL, {name: {titleName}});
  };

  const handleDeleteFavorite = async (key: string) => {
    const resultDelete = await deleteItem(key);
    console.log('resultDelete:::::', resultDelete);
  };

  return (
    <View style={[styles.card, styles.shadowProp]}>
      <View style={styles.row}>
        <Text style={styles.titleName}>{title}</Text>
        <Text style={styles.currency}>{currency} MXN</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.deleteFavorite}
          onPress={() => handleDeleteFavorite(title)}>
          <Text>Elminar de Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.historialButton}
          onPress={() => handleDetailHistorial(title)}>
          <Text style={styles.historialButtonText}>Ver Historial</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    width: '100%',
    height: 75,
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1,
  },
  titleName: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  currency: {
    fontSize: 19,
  },

  deleteFavorite: {
    backgroundColor: '#1D9EB8',
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  historialButton: {
    backgroundColor: '#26A9C5',
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  historialButtonText: {
    color: 'white',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 5,
  },
});
