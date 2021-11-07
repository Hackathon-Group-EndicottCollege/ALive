import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
import Login from "./Login";

export default function App() {
  const [isLoggedIn, setLogin] = useState(false);
  if (isLoggedIn) {
    return (
      <View style={styles.container}>
        <Navigation />
      </View>
    );
  } else {
    return (
      <View>
        <Login setLogin={setLogin} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
