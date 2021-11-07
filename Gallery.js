import moment from "moment";
import React from "react";
import { SafeAreaView,Text,StyleSheet, FlatList, View,Button } from "react-native";
import { Dimensions } from "react-native";
const DATA = [
    {
      id: moment().format(),
      title: moment().format('LLLL')+" - "+moment().format('LT'),
       img: "icon.png",
    },
    {
        id: moment().format(),
        title: moment().format('LLLL')+" - "+moment().format('LT'),
         img: "icon.png",
      },
      {
        id: moment().format(),
        title: moment().format('LLLL')+" - "+moment().format('LT'),
         img: "icon.png",
      },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const Gallery = () => {
    // return(
    //     <SafeAreaView  style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            
    //     </SafeAreaView>
    // );
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    
      return (
        <View>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#111111',
      flex: 2,
      height: 200,
    },
    item: {
      backgroundColor: '#808080',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });


export default Gallery;