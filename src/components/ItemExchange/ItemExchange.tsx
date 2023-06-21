import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type ExchangeRateProps = {
  currency: string;
  title: string;
};
export const ItemExchange = ({title, currency}: ExchangeRateProps) => {
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <Text style={styles.titleName}>{title}</Text>
      <Text style={styles.currency}>{currency}</Text>
    </View>
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
