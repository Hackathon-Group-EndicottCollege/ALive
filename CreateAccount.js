import React from "react";
import { SafeAreaView, StyleSheet, View, Text,TextInput,TouchableOpacity,Button, Dimensions, Alert} from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const CreateAccount = () => {
    const [name , onChangeName] = React.useState();
    const [email, onChangeEmail] = React.useState();
    const [pword, onChangePword] = React.useState();
    const [confirmpword, onChangePwordConfirm] = React.useState(false);
   
    return(
        <SafeAreaView  style={{justifyContent: "center", alignItems: "center" }}>
           <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Enter Name(First, Last)"
        />
         <TextInput
         style={styles.input}
         onChangeText={onChangeEmail}
         value ={email}
         placeholder= "Enter Email" 
        />
         <TextInput
         style={styles.input}
         onChangeText={onChangePword}
         value ={pword}
         placeholder= "Enter Password" 
        />
         <TextInput
         style={styles.input}
         onChangeText={onChangePwordConfirm}
         value ={confirmpword}
         placeholder= "Confirm Password" 
        />
       <TouchableOpacity> 
           <Text style={ (confirmpword == pword) ? { color:'white'} : {color : 'red'}}>Passwords Dont match </Text>
           <Text style={ (confirmpword == pword) ? { color:'green'} : {color : 'white'}}>Passwords Match</Text>
            
       </TouchableOpacity>
       
        <Button
        title="Continue"
        color="#000000"
        onPress={()=>{
            if(confirmpword != pword){
                alert('Passwords dont match');
            }}}
      />
    </SafeAreaView>
    );
    }

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height:Dimensions.get("window").height,
    },
    input: {
      height: 40,
      width : 4*(Dimensions.get("window").width/5),
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  export default CreateAccount;