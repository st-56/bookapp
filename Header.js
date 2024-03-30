import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
//import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  return (
      <View style={styles.headerStyle}>
        <Pressable onPress = {() => navigation.toggleDrawer()}>
          <Image
            style={styles.icon} 
            source={{uri: "https://github.com/st-56/ReactNative_wk3_BookList/blob/main/assets/bookimg/icon_menu.png?raw=true"}}
          />
        </Pressable>
        <Pressable>
          <Image 
            style={styles.icon} 
            source={{uri: "https://github.com/st-56/ReactNative_wk3_BookList/blob/main/assets/bookimg/icon_search.png?raw=true"}}
          />
        </Pressable>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "white",
    justifyContent: "space-between",
    //alignItems: "center",
    //height: 60,
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: "row",
    paddingTop: 20
    //shadowColor: "#000",
    //shadowOffset: { width: 0, height: 2 },
    //shadowOpacity: 0.2,
    // Android Only
    //elevation: 4
  },
  textStyle: {
    fontSize: 20
  },
  icon: {
    width: 30,
    height: 30
  }
});

export default Header;