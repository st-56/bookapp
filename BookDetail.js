import React from "react";
import { StyleSheet, SectionList, Text, View, Image, ScrollView, Pressable, Linking } from "react-native";

const BookDetail = ({ book, navigation }) => {
    return (
        /*<View style={styles.container}>
            <Text style={styles.title}>{BookList.title}</Text>
            <Image 
                style={styles.img}
                source={{uri: BookList.image}}
            />
            <Text style={styles.name}>{BookList.book_name}</Text>
            <Text style={styles.author}>{BookList.author}</Text>
        </View>
        */
        <View style={styles.cardContainerStyle}>
            <View style={styles.cardSectionStyle}>
              <Pressable
                onPress={() => navigation.navigate('Detail', book)}
              >         
                <Image
                  style={styles.imageStyle}
                  source={{uri: book.image}}
                />
              </Pressable>
            </View>
            <View style={[styles.thumbnailContainerStyle, 
                        styles.cardSectionStyle]}>
              <View style={styles.headerContentStyle}>
                <Text style={styles.name}>{book.book_name}</Text>
                <Text style={styles.author}>{book.author}</Text>
              </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
   /*container: {
        width: 140,
        height: 256,
        borderWidth: 1,
        borderRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
   },
   */
  /*
   title: {
        color: '#131313',
        fontSize: 24,
        fontFamily: 'Roboto'
   },
   */
   /*img: {
        width: 140,
        height: 200
   },
   */
   name: {
        color: '#131313',
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
   },
   author: {
        color: '#666666',
        fontSize: 12,
        fontFamily: 'Roboto'
   },
   thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
    marginTop: 10
  },
  cardContainerStyle: {
    //borderWidth: 1,
    //borderRadius: 2,
    //borderColor: "#ddd",
    //shadowColor: "#000",
    //shadowOffset: { width: 0, height: 2 },
    //shadowOpacity: 0.1,
    //shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    //borderColor: "#ddd",
    //borderBottomWidth: 1
  },
  imageStyle: {
    height: 200,
    width: 140
  }
});

export default BookDetail;