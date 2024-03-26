import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import BookList from "./src/component/BookList";
import BookDetail from "./src/component/BookDetail";
//import bookList from "./src/json/booklist.json";
import Header from "./src/component/Header"

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <BookList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;