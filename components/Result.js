import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormatterCurrency from './FormattedCurrency';

// const data = [
//     { id: 1, currencyText: '' },
//     { id: 2, currencyText: '' },
// ];

const Result = ({ currentCurrencyValue, convertedCurrencyValue, 
                fromCurrency, toCurrency }) => {
    return (
        <View style={styles.container}>
            <Text>Current currency</Text>
            <FormatterCurrency type={fromCurrency} value={currentCurrencyValue} />
            <Text style={{marginTop: 10}}>Conversion currency</Text>
            <FormatterCurrency type={toCurrency} value={convertedCurrencyValue} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        alignItems: 'center',
    },
});

export default Result;