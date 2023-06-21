import React, {useState} from 'react';
import {ResultSymbols} from '../../API/Symbols/interface';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {useSymbols} from '../../hooks/useSymbols';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const CurrencyConverter = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [convertCurrency, setConvertCurrency] = useState('');
  const [conversionResult, setConversionResult] = useState('');
  const dataDropdown = useSymbols();
  const handleConversion = () => {
    const result = 10;
    setConversionResult(result.toFixed(2));
  };

  if (dataDropdown.isLoading) {
    return <Text>Cargando información...</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textDropDown}>Moneda:</Text>
      {dataDropdown.data && (
        <SelectDropdown
          data={Object.entries(dataDropdown.data)}
          buttonStyle={styles.dropdown3BtnStyle}
          defaultValueByIndex={102}
          onSelect={(selectedItem: string) => {
            setSelectedCurrency(selectedItem);
          }}
        />
      )}

      <Text style={styles.textDropDown}>Modena a convertir:</Text>
      {dataDropdown.data && (
        <SelectDropdown
          data={Object.entries(dataDropdown.data)}
          buttonStyle={styles.dropdown3BtnStyle}
          defaultValueByIndex={150}
          onSelect={(selectedItem: string) => {
            setConvertCurrency(selectedItem);
          }}
        />
      )}

      <TouchableOpacity
        onPress={handleConversion}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Convertir</Text>
      </TouchableOpacity>

      {conversionResult !== '' && (
        <Text style={styles.textConverted}>
          Conversion Result: {conversionResult}
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
  textDropDown: {
    fontSize: 20,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
    width: '80%',
  },
  appButtonText: {
    fontSize: 15,
    color: '#fff',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  dropdown3BtnStyle: {
    width: '80%',
    height: 35,
    backgroundColor: '#FFF',
    paddingHorizontal: 0,
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
