import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Chat() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ask any health questions!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffeef9',
      justifyContent: 'top',
      alignItems: 'center',
    },
    text: {
        color: 'black',
        marginTop: 30,
        fontWeight:'bold',
        fontSize: 20,
      },
    });