import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
import Login from "./Login";
import CreateAccount from "./CreateAccount"

export default function App() {
  const [isLoggedIn, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  if (isLoggedIn) {
    return (
      <View style={styles.container}>
        <Navigation />
      </View>
    );
  } 
  else if(signup){
    return(
      <View>
        <CreateAccount />
      </View>
    )
  }
  
  else {
    return (
      <View>
        <Login setLogin={setLogin} setSignup = {setSignup}/>
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
