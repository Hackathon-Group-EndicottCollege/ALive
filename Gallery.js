import React from "react";
import { SafeAreaView,Text,} from "react-native";
import { Dimensions } from "react-native";

const Gallery = () => {
    return(
        <SafeAreaView  style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>
                No Videos
            </Text>
        </SafeAreaView>
    );
}

export default Gallery;