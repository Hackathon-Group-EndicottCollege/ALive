import React from "react";
import { SafeAreaView, StyleSheet, View, Text,TextInput,TouchableOpacity,Button, Dimensions, Alert} from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Regex from https://mailtrap.io/blog/react-native-email-validation/
const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    if(email == null){
        return true;
    }
    else if(email == ""){
        return true;
    }
    else{
        return expression.test(String(email).toLowerCase())
    }
}

const CreateAccount = (props) => {
    const [name , onChangeName] = React.useState();
    const [email, onChangeEmail] = React.useState();
    const [pword, onChangePword] = React.useState();
    const [confirmpword, onChangePwordConfirm] = React.useState();
   
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
           <Text style={  validate(email) ? { color:'white'} : {color : 'red'}}>Invalid Email </Text>
       </TouchableOpacity>
       <TouchableOpacity> 
           <Text style={ (confirmpword == pword) ? { color:'white'} : {color : 'red'}}>Passwords Dont match </Text>
           <Text style={ (confirmpword == pword) ? { color:'green'} : {color : 'white'}}>Passwords Match</Text>
            
       </TouchableOpacity>
       
        <Button
        title="Continue"
        color="#000000"
        onPress={()=>{
            if(!validate(email)){
                alert('The email you provided is invalid');
            }
            if(confirmpword != pword){
                alert('Passwords dont match');
            }
            if(confirmpword == pword && validate(email)){
                props.setSignup(false);
            }
        }}/>
        <Button
        title="Back"
        color="#000000"
        style= {styles.backButton}
        onPress={()=>{
            props.setSignup(false);
        }}
        />
    </SafeAreaView>
    );
    }

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height:Dimensions.get("window").height,
    },
    backButton:{
        marginTop:5,
        paddingTop:5,
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