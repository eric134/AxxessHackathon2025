import { Text, View, StyleSheet} from "react-native";
import {Link} from 'expo-router';

export default function Index() {
  return (
    <View
    style={styles.container}>
      <Text style={styles.text}>Welcome Jazmin!</Text>
      <Link href="/profile" style={styles.button}>
        Go to profile screen
      </Link>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#000',
  },
});