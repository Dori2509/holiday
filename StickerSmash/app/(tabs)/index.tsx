import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hallo das wird eine App für Oktober! </Text>
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
    color: '#000000',
  },
  button:{
    color: '#000000',
    textDecorationLine: "underline",
    fontSize: 20,
  },
});
