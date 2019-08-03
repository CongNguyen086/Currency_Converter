import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ConversionTypeButton = ({ from, to, 
                                fromCurrency, toCurrency,
                                setConversionCurrencies
                             }) => {
    const fromFlag = from === 'USD' ? '🇺🇲' : '🇻🇳';
    const toFlag = to === 'USD' ? '🇺🇲' : '🇻🇳';
    const isSelected = fromCurrency === from && toCurrency === to;
    const backgroundColor = isSelected ? 'lightblue' : null;
    const buttonStyle = { backgroundColor: backgroundColor }

    return (
        <TouchableOpacity onPress={() => setConversionCurrencies(from,to)}>
            <View style={[styles.container, buttonStyle]}>
                <Text>
                    {fromFlag} {from}  to  {toFlag} {to}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        paddingHorizontal: 30,
        paddingVertical: 5,
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: 'lightblue',
    },
});

export default ConversionTypeButton;