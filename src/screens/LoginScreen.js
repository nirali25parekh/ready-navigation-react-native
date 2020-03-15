
import React, { Component } from 'react';
import {
    StyleSheet, ScrollView, View, Text, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, Dimensions,
} from 'react-native';

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>


                    <StatusBar backgroundColor='#29434e'
                        barStyle='light-content' />
                    <Text style={styles.heading}>Login</Text>

                    <TextInput
                        style={styles.inputBox}
                        underLineColorAndroid='#000000'
                        placeholderTextColor='rgba(0,0,0,0.4)'
                        placeholder="email-id"
                        keyboardType='email-address'
                        autoCapitalize='none'
                        onChangeText={(text) => this.setState({ email: text })}
                    />

                    <TextInput
                        style={styles.inputBox}
                        underLineColorAndroid='#000000'
                        placeholder="password"
                        placeholderTextColor='rgba(0,0,0,0.4)'
                        secureTextEntry={true}
                        autoCapitalize="none"
                        onChangeText={(text) => this.setState({ password: text })}
                    />

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>


                    <Text style={styles.lastText}>
                        Don't have an account? {"\t\t"}

                        <Text
                            style={styles.signupText}
                            onPress={() => this.props.navigation.navigate('SignUpScreen')}>
                            Sign Up
                        </Text>
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    horizontalLine: {
        borderBottomColor: 'black',
        borderColor: 'red',
        height: 0,
        width: 150,
        borderStyle: 'solid',
        margin: 10,
        borderBottomWidth: 1,
    },
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: '#3598dc',
        justifyContent: 'center',
        // alignSelf:'center',
        // alignItems: 'center',
        // alignContent:'center',
    },
    heading: {
        color: 'black',
        fontSize: 26,
        marginBottom: 10
    },
    inputBox: {
        marginVertical: 14,
        paddingHorizontal: 16,
        width: 300,
        height: 50,
        backgroundColor: '#e2e2e2',
        fontSize: 16,
        // borderRadius: 25,
    },
    innerContainer: {
        padding: 10,
        margin: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        // alignContent:'center',
        justifyContent: 'center',
        alignItems: 'center',
        // alignSelf:'center',
    },
    buttonText:
    {
        fontSize: 18,
        alignContent: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        textAlign: 'center'
    },
    button:
    {
        paddingVertical: 15,
        paddingHorizontal: 15,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        width: 140,
        backgroundColor: '#3598dc',
    },
    signupText: {
        fontSize: 16,
        color: '#1133ff',
        textDecorationLine: 'underline',
    },
    lastText: {
        margin: 20,
        fontSize: 16,
    }
})
