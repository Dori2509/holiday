import { Link, Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <><Stack.Screen options={{ title: "Opps! not found" }} />
    <View style={styles.container}>
          <Link href={"/(tabs)"} style={styles.button}>Go back to Home</Link>
    </View></>
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
