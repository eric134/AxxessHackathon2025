import React, { useEffect } from 'react';
import { View, Button, StyleSheet, Text, Alert } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useRouter } from 'expo-router';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
    const router = useRouter(); // Use `useRouter()` for navigation

    const [request, response, promptAsync] = Google.useAuthRequest({
        webClientId: '367397364215-usamnuuk0vrtenueq1apmic8tt30ecmj.apps.googleusercontent.com', // Your Web Client ID
    });

    useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            console.log("Google Authentication Success:", authentication);
            Alert.alert("Login Successful", "You have logged in successfully!");

            // Use `router.push('/home')` to navigate to home after login
            router.push('/home');
        } else if (response?.type === 'error') {
            console.error("Google Authentication Error:", response);
            Alert.alert("Login Failed", "Something went wrong. Please try again.");
        }
    }, [response]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to AxxessApp</Text>
            <Button 
                title="Sign in with Google" 
                onPress={() => promptAsync()} 
                disabled={!request} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
});

export default LoginScreen;