import { Text, View, StyleSheet} from "react-native";
import {Link} from 'expo-router';
import { CurrentRenderContext } from "@react-navigation/native";

export default function Index() {
  return (
    <View
    style={styles.container }>
  <Text style={{
      color: 'black',
      fontSize: 25,
      position: 'absolute',
      top: 20,
      }
      }>Welcome!</Text>

<Text style={{
      color: 'salmon',
      fontSize: 25,
      flex: 1,
      marginTop: 60,
      textAlign: 'center',
      }
      }>Track, share, & care{'\n'}with your daily checkup</Text>

      <button
      style={{
        backgroundColor: 'pink',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        position: 'absolute',
        bottom: 20,
      }}
    >
        <Link href="/survey" style={styles.button}>
        Go to daily survey
        </Link>
      </button>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  text: {
    color: 'crimson',
    fontSize: 25,
  },
  button: {
    fontSize: 20,
    color: '#000',
  },
});