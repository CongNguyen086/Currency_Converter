import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './components/Input';
import ConversionTypeButton from './components/ConversionTypeButton';
import Result from './components/Result';

export default function App() {
  const [currentCurrencyValue, setFromCurrencyValue] = useState(0);
  const [convertedCurrencyValue, setConvertedValue] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('VND');
  const [toCurrency, setToCurrency] = useState('USD');
  
  const convertCurrency = () => {
    let value = fromCurrency === 'VND' ? (currentCurrencyValue/23000) : (currentCurrencyValue*230000)
    setConvertedValue(value);
  };
  const setConversionCurrencies = (from,to) => {
      setFromCurrency(from);
      setToCurrency(to);
  };

  useEffect(convertCurrency);
  return (
    <View style={styles.button}>
      <Text style={styles.instruction}>Please enter the value of currency you want to convert</Text>
      <Input setFromCurrencyValue={setFromCurrencyValue} />
      <ConversionTypeButton from='VND' to='USD'
                            fromCurrency={fromCurrency} toCurrency={toCurrency}
                            setConversionCurrencies={setConversionCurrencies}></ConversionTypeButton>
      <ConversionTypeButton from='USD' to='VND'
                            fromCurrency={fromCurrency} toCurrency={toCurrency}
                            setConversionCurrencies={setConversionCurrencies}></ConversionTypeButton>
      <Result currentCurrencyValue={currentCurrencyValue} convertedCurrencyValue={convertedCurrencyValue}
              fromCurrency={fromCurrency} toCurrency={toCurrency}></Result>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
