import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Dimensions } from "react-native";
// Expo Camera
// https://docs.expo.dev/versions/latest/sdk/camera/
// Non Expo
// https://www.codegrepper.com/code-examples/javascript/react+native+camera+expo 
const CameraScreen = (props) => {
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);
    const [isRecording, setRecording] = useState(false)
    const [recordText, changeText] = useState("Record")
    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
        // const { status } = await Camera.getMicrophonePermissionsAsync();
        // setHasPermission(status === 'granted');
        // const { status3 } = await Camera.getAvailableVideoCodecsAsync();
        // setHasPermission(status3 === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return(
        <SafeAreaView>
            <Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonFlip}
                    onPress={() => {
                    setType(
                        type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                    }}>
                    <Text style={styles.text}> Flip </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.recordContainer}>
                <TouchableOpacity
                    style={styles.buttonRecord}
                    onPress={() => {
                        if(recordText==='Record'){
                            changeText("Live Now")
                        }
                        else{
                            changeText("Record")
                        }
                    }}>
                    <Text style={styles.text}> {recordText} </Text>
                </TouchableOpacity>
                </View>
            </Camera>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    camera: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },    
    buttonContainer: {
        flex: 2,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    recordContainer: {
        flex: 2,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonFlip: {
        width: (Dimensions.get("window").width)*.3,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
    },
    buttonRecord: {
        width: (Dimensions.get("window").width)*.3,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
  });

export default CameraScreen;