import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome!</Text>

      <Text style={styles.description}>
        Track, share, & care{"\n"}with your daily checkup
      </Text>

      <TouchableOpacity style={styles.button}>
        <Link href="/survey" style={styles.buttonText}>
          Go to daily survey
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5DC",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  welcomeText: {
    color: "black",
    fontSize: 25,
    position: "absolute",
    top: 50,
  },
  description: {
    color: "salmon",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 50,
  },
  button: {
    backgroundColor: "pink",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});