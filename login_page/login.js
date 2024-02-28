import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Login() {
    const [login, setLogin] = useState(false);

    const handleLoginClick = () => {
        setLogin(true);
    }

    //if(setLogin){
        //Will set up for later
    //}

    return (
        <View style={styles.container}>
            <View style = {styles.View}>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text>Email</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <Text>Password</Text>
                <TextInput style={styles.input} secureTextEntry={true} />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24, 
        fontWeight: 'bold', 
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        width: 200,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#32cd32',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});