import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, Text, Alert, ActivityIndicator, Image } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useRouter } from 'expo-router';

WebBrowser.maybeCompleteAuthSession();

const ProfileScreen = () => {
    const router = useRouter();
    const [user, setUser] = useState<{ name: string; email: string; picture: string } | null>(null);
    const [loading, setLoading] = useState(false);

    const [request, response, promptAsync] = Google.useAuthRequest({
        webClientId: '367397364215-usamnuuk0vrtenueq1apmic8tt30ecmj.apps.googleusercontent.com', 
    });

    useEffect(() => {
        if (response?.type === 'success') {
            setLoading(true);
            const { authentication } = response;
            
            fetchUserData(authentication?.accessToken);
        } else if (response?.type === 'error') {
            console.error("Google Authentication Error:", response);
            Alert.alert("Login Failed", "Something went wrong. Please try again.");
        }
    }, [response]);

    const fetchUserData = async (token: string | undefined) => {
        if (!token) return;

        try {
            const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
                headers: { Authorization: `Bearer ${token}` },
            });

            const userInfo = await response.json();
            console.log("User Info:", userInfo);

            setUser({
                name: userInfo.name,
                email: userInfo.email,
                picture: userInfo.picture,
            });

        } catch (error) {
            console.error("Error fetching user data:", error);
            Alert.alert("Failed to retrieve user info");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : user ? (
                <>
                    <Image source={{ uri: user.picture }} style={styles.profileImage} />
                    <Text style={styles.title}>Welcome, {user.name}!</Text>
                    <Text style={styles.subtitle}>{user.email}</Text>
                    <Button title="Logout" onPress={() => setUser(null)} color="red" />
                </>
            ) : (
                <>
                    <Text style={styles.title}>Sign in to view your profile</Text>
                    <Button 
                        title="Sign in with Google" 
                        onPress={() => promptAsync()} 
                        disabled={!request} 
                    />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffeef9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
    }
});

export default ProfileScreen;