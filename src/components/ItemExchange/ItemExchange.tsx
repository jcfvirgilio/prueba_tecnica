import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {HISTORIAL} from '../../constants';
type ExchangeRateProps = {
  currency: string;
  title: string;
};

export const ItemExchange = ({title, currency}: ExchangeRateProps) => {
  const navigation = useNavigation();

  const handleDetailHistorial = ({title}) => {
    navigation.navigate(HISTORIAL, {name: {title}});
  };

  return (
    <View style={[styles.card, styles.shadowProp]}>
      <View style={styles.row}>
        <Text style={styles.titleName}>{title}</Text>
        <Text style={styles.currency}>{currency} MXN</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.favouritesButton}>
          <Text>Agregar a favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.historialButton}
          onPress={() => handleDetailHistorial({title})}>
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

  favouritesButton: {
    backgroundColor: '#99CAF9',
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
