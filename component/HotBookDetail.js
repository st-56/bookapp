import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";

const HotBookDetail = props => {
   let { book } = props;
   return (
     <View style={{flexDirection: 'column'}}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{uri: book.image}}
          />
        </View>
      </View>  
      <View style={styles.headerContainerStyle}>
        <Text style={styles.headerTitleStyle}>{book.book_name}</Text>
        <Text style={styles.headerContentStyle}>{book.author}</Text>
      </View>   
    </View>

  )};

const styles = StyleSheet.create({
  cardContainerStyle: {
    /*borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,*/
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 12,
    width: 140,
  },
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#131313',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  headerContentStyle: {
    fontSize: 14,
    color: '#666666',
    fontFamily: 'Roboto',
    //color: "#222",
    //width: '100%'
  },
  cardSectionStyle: {
    padding: 5,
    //backgroundColor: "#fff",
    //borderColor: "#ddd",
    //borderBottomWidth: 1
  },
  imageStyle: {
    height: 200,
    width: 140,
  }
});

export default HotBookDetail;