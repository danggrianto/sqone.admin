import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

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
                <Text style={styles.title}>Square {'\n'}One {'\n'}Church</Text>
                <Text style={styles.description}>Sign in to continue</Text>
            </View>
            <View style={styles.usernameInputContainer}>
                <Image style={styles.usernameImage} source={require('../assets/username.png')}></Image>
                <TextInput placeholder='Email' style={styles.usernameInput} />
            </View>
            <View style={styles.passwordInputContainer}>
                <Image style={styles.passwordImage} source={require('../assets/password.png')}></Image>
                <TextInput placeholder = 'Password' style={styles.passwordInput} secureTextEntry={true}>
                </TextInput>
            </View>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.forgotPasswordButton}>
                <Text style = {styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.registerButton}>
                <Text style= {styles.registerButtonText}>Signup!</Text>
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
    View : {
        justifyContent : 'center',
        alignItems : 'center',
    },
    title : {
        fontSize: 40,
        color : '#FEB06A',
        textAlign: 'center'
    },
    description :{
        color : '#FEB06A',
        fontSize : 10
    },
    logoImage: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
    passwordInputContainer: {
        marginTop: 10,
        marginBottom: 20,
        borderBottomColor: '#FEB06A',
        position: 'relative',
        flexDirection: 'row'
    },
    passwordImage : {
        marginTop: 11,
        marginRight: 3,
        height : 30,
        width : 20
    },
    usernameInputContainer:{
        position : 'relative',
        flexDirection : 'row'
    },
    usernameImage : {
        width : 30,
        height : 30,
        marginTop: 11,
        position: 'absolute',
        borderBlockColor: '#FEB06A'
    },
    usernameInput : {
        width: 200,
        height: 40,
        borderBottomColor: '#FEB06A',
        borderBottomWidth: 1, 
        paddingHorizontal: 10,
        marginLeft: 30
    },
    passwordInput: {
        width: 200,
        height: 40,
        marginLeft: 4,
        borderBottomColor: '#FEB06A',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
    },
    loginButton: {
        backgroundColor: '#FEB06A',
        padding: 15,
        width: 220,
        marginBottom: 20,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    registerButton: {
        padding: 10,
        width : 200,
        borderRadius: 20,
        marginBottom: 20,
    },
    registerButtonText : {
        color: 'white',
        textAlign: 'center',
        fontSize : 10,
    },
    forgotPasswordText :{
        color : 'white',
        fontSize : 10
    }
});