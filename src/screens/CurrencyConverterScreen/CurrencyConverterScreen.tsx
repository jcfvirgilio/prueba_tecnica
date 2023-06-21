import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, Button, StyleSheet} from 'react-native';

export const CurrencyConverterScreen = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState('1');
  return (
    <SafeAreaView style={styles.container}>
      <Text>Base Currency:</Text>
      <TextInput value={baseCurrency} onChangeText={setBaseCurrency} />

      <Text>Target Currency:</Text>
      <TextInput value={targetCurrency} onChangeText={setTargetCurrency} />

      <Text>Amount:</Text>
      <TextInput value={amount} onChangeText={setAmount} />

      <Text>Converted Amount: ----</Text>
      <Button title="Convert" />
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
