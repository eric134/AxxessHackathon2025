import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Survey() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Survey screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5DC',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
        color: '#fff',
      },
    });