import { Text, View, StyleSheet } from "react-native";

export default function Packliste() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Packliste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#bcb9ec'
  },
  text: {
    color: "#000000",
  },
});
