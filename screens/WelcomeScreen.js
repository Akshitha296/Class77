import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView, Alert, Image } from 'react-native';
import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../config'

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            emailId: '',
            password: '',
        }
    }

    userLogin = async(email, pwd) =>{
        if(email && pwd){
            console.log(email)
                const response = await firebase.auth().signInWithEmailAndPassword(email, pwd)
                console.log(response)
                if (response){
                    console.log("Logged In Successfully")
                    //this.props.navigation.navigate('TransactionScreen')
                }
        } else {
            Alert.alert("Enter an email id, or a password")
        }
    }

    userSignUp = async(email, pwd) =>{
        if(email && pwd){
            console.log(email)
                const response = await firebase.auth().createUserWithEmailAndPassword(email, pwd)
                console.log(response)
                if (response){
                    console.log("Created User Successfully")
                    //this.props.navigation.navigate('TransactionScreen')
                }
        } else {
            Alert.alert("Enter an email id, or a password")
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.headingContainer}>
                    <Text style = {styles.title}>
                        Book Santa!
                    </Text>
                </View>

                <View style = {styles.buttonContainer}>
                    <TextInput
                        style = {styles.loginBox}
                        placeholder = "Email Id"
                        keyboardType = 'email-address'
                        onChangeText = {(text) => {
                            this.setState({
                                emailId: text,
                            })
                        }}
                    />

                    <TextInput
                        style = {styles.loginBox}
                        placeholder = "Password"
                        secureTextEntry = {true}
                        onChangeText = {(text) => {
                            this.setState({
                                password: text,
                            })
                        }}
                    />

                    <TouchableOpacity
                    style = {styles.loginButton}
                        onPress = {() => {
                            this.userLogin(this.state.emailId, this.state.password)
                        }}>
                            <Text style = {styles.buttonText}>
                                Login
                            </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                    style = {styles.loginButton}
                        onPress = {() => {
                            this.userSignUp(this.state.emailId, this.state.password)
                        }}>
                            <Text style = {styles.buttonText}>
                                Sign Up
                            </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'brown'
    },
    headingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        color: "white",
        margin: 30,
    },
    buttonContainer: {
        alignItems: 'center',
    },
    loginBox: {
        width: 300,
        height: 50,
        borderWidth: 2,
        fontSize: 20,
        margin: 10,
    },
    loginButton: {
        backgroundColor: "red",
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 20,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
})