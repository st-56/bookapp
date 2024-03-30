import React from "react";
import { View, FlatList } from "react-native";
//import Header from "../component/Header";
//import BookDetail from "../component/BookDetail";
import BookList from "../component/BookList";
import booklist from "../json/book_section.json";

const BookScreen = ({ navigation }) => {
    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
            <BookList
                list={booklist.BookList}
                navigation={navigation}
            />
        </View>
        //<View style={{flex: 1}}>
        //    <Header title={booklist.book_name} />
        //    <FlatList 
        //        data={booklist.bookList}
        //        renderItem={({ item }) =>
        //        <BookDetail
        //           book={item}
        //           navigation={navigation} 
        //        />}
        //        keyExtractor={item => item.title}
        //    />
        //
        //</View>
        //<View style={{backgroundColor: "#fff", height: 800}}>
        //    <BookList list={booklist} />
        //</View>
    );
};

export default BookScreen;