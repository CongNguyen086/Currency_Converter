import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

var areIntlLocalesSupported = require('intl-locales-supported');

var localesMyAppSupports = [
    'en-US',
    'vi-VN',
];

if (global.Intl) {
    // Determine if the built-in `Intl` has the locale data we need.
    if (!areIntlLocalesSupported(localesMyAppSupports)) {
        // `Intl` exists, but it doesn't have the data we need, so load the
        // polyfill and replace the constructors we need with the polyfill's.
        require('intl');
        Intl.NumberFormat   = IntlPolyfill.NumberFormat;
        Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
    }
} else {
    // No `Intl`, so use and load the polyfill.
    global.Intl = require('intl');
}

const FormattedCurrency = ({type, value}) => {
    const format = type === 'USD' ? 'us' : 'vn';
    const currency = type === 'USD' ? 'USD' : 'VND';

    const formatter = new Intl.NumberFormat(format,
        {
            style: 'currency',
            currency: currency,
        }
    );
    return (
        <Text style={styles.result}>{formatter.format(value)}</Text>
    );
};

const styles = StyleSheet.create({
    result: {
        fontSize: 30,
        color: 'green',
        fontWeight: 'bold'
    }
});

export default FormattedCurrency;