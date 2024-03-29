import React from "react";
//import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
//import { FlatList } from "react-native-gesture-handler";
//import BookList from "./src/component/BookList";
//import BookDetail from "./src/component/BookDetail";
//import bookList from "./src/json/booklist.json";
//import Header from "./src/component/Header"
import Navigation from "./src/Navigation";

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  }
//});

export default App;