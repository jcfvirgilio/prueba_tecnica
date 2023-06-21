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
