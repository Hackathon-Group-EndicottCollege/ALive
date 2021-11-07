'use strict'
import React from "react";
import Camera from "react-native-camera";
import { View, Text } from "react-native";

function CameraScreen(){
    return(
        <View>
            <Camera ref={cam=>{this.camera = cam;}} aspect = {Camera.constants.Aspect.fill}>
                    <Text onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                </Camera>
        </View>
    );
}

// export default CameraScreen;