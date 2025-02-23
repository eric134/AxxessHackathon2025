import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import GoogleForm from '../GoogleForm';

export default function Survey() {
  return (
    <View style={styles.container}>
      <GoogleForm />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffeef9',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
        color: '#fff',
      },
    });