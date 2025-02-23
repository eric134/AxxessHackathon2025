import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";
import Photo from "../photo";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>Welcome to{"\n"}myCheckUp!</Text>

      <View style={styles.containerPhoto}>
        <Photo />
      </View>

      <Text style={styles.description}>
        Track, share, & care{"\n"}with your daily checkup
      </Text>

      <TouchableOpacity style={styles.button}>
        <Link href="/survey" style={styles.buttonText}>
          Go to daily survey
        </Link>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffeef9",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  containerPhoto: {
    marginBottom: 20,
    marginTop: 20,
  },
  welcomeText: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 30,
  },
  description: {
    color: "crimson",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 50,
  },
  button: {
    backgroundColor: "pink",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "black",
  },
});