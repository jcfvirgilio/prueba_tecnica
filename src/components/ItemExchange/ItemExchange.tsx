import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
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
    <TouchableOpacity
      style={[styles.card, styles.shadowProp]}
      onPress={() => handleDetailHistorial({title})}>
      <Text style={styles.titleName}>{title}</Text>
      <Text style={styles.currency}>{currency} MXN</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  currency: {
    fontSize: 17,
  },
  titleName: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    width: '100%',
    height: 100,
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
