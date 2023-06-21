import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import {ExchangeRate} from '../../Utils/ExchangeRate/ExchangeRate';

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
