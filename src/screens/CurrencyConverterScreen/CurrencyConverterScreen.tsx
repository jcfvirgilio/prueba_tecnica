import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {useSymbols} from '../../hooks/useSymbols';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {currencyExchange} from '../../API/CurrencyExchange/CurrencyExchange';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

const CurrencyConverter = () => {
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState<
    [string, string]
  >(['MXN', 'Mexican Peso']);
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState<
    [string, string]
  >(['USD', 'United States Dollar']);

  const [amount, setAmount] = useState(0);
  const [conversionResult, setConversionResult] = useState<number | boolean>(
    false,
  );

  const dataDropdown = useSymbols();

  const handleConversion = async () => {
    const from: string = selectedCurrencyFrom[0];
    const to: string = selectedCurrencyTo[0];
    const amountP: number = parseInt(amount);

    const {success, result} = await currencyExchange(from, to, amountP);
    if (success) {
      setConversionResult(result);
    } else {
      setConversionResult(success);
    }
  };

  const handleAmountChange = (valueProp: any) => {
    const numericValue = valueProp.replace(/[^0-9]/g, '').slice(0, 5);
    setAmount(numericValue);
  };

  if (dataDropdown.isLoading) {
    return <Text>Cargando información...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textInput}>Cantidad:</Text>
      <TextInput
        style={styles.inputStyle}
        value={amount}
        onChangeText={handleAmountChange}
        placeholder="Cantidad a convertir"
        keyboardType="numeric"
      />

      <Text style={styles.textInput}>Moneda:</Text>
      {dataDropdown.data && (
        <SelectDropdown
          data={Object.entries(dataDropdown.data)}
          buttonStyle={styles.inputStyle}
          defaultValueByIndex={102}
          onSelect={(selectedItem: string) => {
            setSelectedCurrencyFrom(selectedItem);
          }}
        />
      )}

      <Text style={styles.textInput}>Modena a convertir:</Text>
      {dataDropdown.data && (
        <SelectDropdown
          data={Object.entries(dataDropdown.data)}
          buttonStyle={styles.inputStyle}
          defaultValueByIndex={150}
          onSelect={(selectedItem: string) => {
            setSelectedCurrencyTo(selectedItem);
          }}
        />
      )}

      <TouchableOpacity
        onPress={handleConversion}
        style={styles.buttonContainer}>
        <Text style={styles.buttonConvert}>Convertir</Text>
      </TouchableOpacity>

      {conversionResult && (
        <Text style={styles.textConverted}>
          Conversión : {conversionResult}
        </Text>
      )}
    </SafeAreaView>
  );
};

const queryClient = new QueryClient();

export const CurrencyConverterScreen = () => (
  <QueryClientProvider client={queryClient}>
    <CurrencyConverter />
  </QueryClientProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 30,
  },
  textInput: {
    fontSize: 20,
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: '#BD28CC',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
    width: '80%',
  },
  buttonConvert: {
    fontSize: 15,
    color: '#fff',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  inputStyle: {
    width: '80%',
    height: 35,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#444',
    marginBottom: 50,
  },
  textConverted: {
    fontSize: 20,
    fontWeight: '700',
  },
});
