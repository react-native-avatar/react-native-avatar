import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.parent}>
        <View style={styles.container}>
          <Text style={styles.text}>텍스트</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.text}>텍스트</Text>
          <Text style={styles.text}>텍스트</Text>
          <Text style={styles.text}>텍스트</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "yellow",
  },
  container2: {
    backgroundColor: "blue",
  },
  text: {
    color: "red",
    fontSize: 30,
  },
  input: {
    fontSize: 30,
  },
});
