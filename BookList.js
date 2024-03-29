import React from "react";
import { StyleSheet, FlatList, SectionList, Text, View, Image, ScrollView } from "react-native";
//import  bookimg from "../assets/bookimg";
import BookDetail from "./BookDetail"
import HotBookDetail from "./HotBookDetail";
//import { SectionList } from "react-native";
import sections from "../json/book_section.json";
//import { FlatList } from "@gluestack-ui/themed";

const BookList = ({ navigation }) => {
    //const renderItem = ({ item }) => <BookDetail BookList={item} />; 
    //return (
    //    <SectionList 
    //        sections={sections}
    //        renderItem={renderItem}
    //        keyExtractor={ item => item.book_name }
    //    />
    //);
    const renderSectionHeader = ({section}) => (
        <>
            <Text style={styles.sectionHeader}>{section.title}</Text>
            {section.horizontal ? (
                <FlatList 
                horizontal={true}
                data={section.data}
                renderItem={({ item }) => <HotBookDetail book={item} navigation={navigation} />}
                showsHorizontalScrollIndicator={false}
                keyExtractor={ item => item.title }
            />
            ) : null}
            
        </>
    );

    const renderItem = ({ item, section }) => {
        if (section.horizontal) {
            return null;
        }
        return <BookDetail book={item} />
    };

    return (
        <SectionList 
            sections={sections}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            showsHorizontalScrollIndicator={false}
            renderSectionHeader={renderSectionHeader}
            renderItem={renderItem}
            keyExtractor={ item => item.title }
        />
    );
};

const styles = StyleSheet.create({
    sectionHeader: {
      //fontWeight: '600',
      fontSize: 24,
      color: '#131313',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      paddingTop: 20,
      paddingBottom: 5,
      paddingLeft: 10,
      //textTransform: 'uppercase',
    }
  })

export default BookList;