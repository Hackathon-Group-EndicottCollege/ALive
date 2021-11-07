import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Dimensions } from "react-native";
export function RecordVideo(props) {
      const cameraRef = useRef();
      const [hasPermission, setHasPermission] = useState(null);
      const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
      const [isPreview, setIsPreview] = useState(false);
      const [isCameraReady, setIsCameraReady] = useState(false);
      const [isRecording, setIsRecording] = useState(false);
    
      const navigation = props.navigation;
      const gameId = props.gameId;
      const title = props.title;
      const phase = props.phase;
      const gameName = props.gameName;

      useEffect(() => {
        onHandlePermission();
      }, []);
    
      const onHandlePermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      };
    
      const onCameraReady = () => {
        setIsCameraReady(true);
      };
    
      const switchCamera = () => {
        if (isPreview) {
          return;
        }
        setCameraType(prevCameraType =>
          prevCameraType === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
        );
      };
    
      const stopRecord = () => {
        setIsRecording(false);
        if (cameraRef.current) {
          cameraRef.current.stopRecording();
          console.log('stopped recording');
        }
      };
    
      const onRecord = async () => {
        if (await Camera.isAvailableAsync()) {
          if (cameraRef.current) {
            setIsRecording(true);
            const options = { quality: '720p', maxDuration: 60 };
            const data = await cameraRef.current.recordAsync(options);
            const source = data.uri;
    
            if (source) {
              console.log('now you have a uri');
              navigation.navigate('PostVideoScreen', {
                gameId: gameId,
                title: title,
                videoUrl: source,
                phase: phase,
                gameName: gameName,
              });
            }
          }
        }
      };
    
      const cancelPreview = async () => {
        await cameraRef.current.resumePreview();
        setIsPreview(false);
      };
    
      if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text style={styles.text}>No access to camera</Text>;
      }
    
      return (
        <View style={styles.cameraContainer}>
          <Camera
            ref={cameraRef}
            style={styles.cameraContainer}
            type={cameraType}
            onCameraReady={onCameraReady}
          />
          <View style={styles.cameraContainer}>
            {isPreview && (
              <TouchableOpacity onPress={cancelPreview} style={styles.closeButton}>
                <AntDesign name="close" size={32} color="#fff" />
              </TouchableOpacity>
            )}
            {!isPreview && (
              <View style={styles.bottomButtonsContainer}>
                <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
                  <MaterialIcons name="flip-camera-ios" size={28} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  disabled={!isCameraReady}
                  onPress={isRecording ? stopRecord : onRecord}
                  style={styles.capture}
                />
                <Text>{isRecording ? 'Recording' : 'Not Recording'}</Text>
              </View>
            )}
          </View>
        </View>
      );
    }