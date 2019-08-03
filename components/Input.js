import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

// class CurrentState extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {currentCurrencyValue: 0}
//     }
// }

const Input = ({setFromCurrencyValue}) => {
    // const setFromCurrencyValue = (text) => {
    //     let obj = new CurrentState
    //     obj.setState({currentCurrencyValue: text})
    // }
    return (
        <TextInput style={styles.input}
                autoFocus
                keyboardType={'numeric'}
                textAlign='center'
                placeholder='100,000,000'
                selectionColor='black'
                onChangeText={setFromCurrencyValue} 
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 70,
        width: 300,
        marginVertical: 10,
        padding: 5,
        fontSize: 35,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'lightblue',
    },
});

export default Input;