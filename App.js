import * as React from "react";
import { View, StyleSheet } from "react-native";
import Router from "./src/routing/Router";

export default function App() {
  return (
    <View style={styles.container}>
      <Router />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
