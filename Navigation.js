//https://reactnavigation.org/docs/material-bottom-tab-navigator/
import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Dimensions } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Gallery from './Gallery';
import CameraScreen from './Camera'

const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Camera"
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: "#694fad" }}
          style={styles.container}
        >
          <Tab.Screen
            name="Camera"
            component={CameraScreen}
            options={{
              tabBarLabel: "Live Now",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="camera" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Gallery"
            component={Gallery}
            options={{
              tabBarLabel: "Gallery",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="image-size-select-actual"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    textAlign: "center",
  },
});

export default Navigation;
