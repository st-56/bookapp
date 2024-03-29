import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking, Pressable } from 'react-native';

const DetailScreen = ({ route }) => {
    const { book_name,
            author,
            url,
            image,
            description
        } = route.params;
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Image 
                        style={styles.imageStyle}
                        source={{uri: image}}
                    />
                </View>
                <View style={styles.cardContainerStyle}>
                    <Text style={styles.name}>
                        {book_name}
                    </Text>
                    <Text style={styles.author}>
                        {author}
                    </Text>
                    <Text style={styles.description}>
                        {description}
                    </Text>
                    <Pressable style={styles.button}>
                        <Text style={{color: "#fff", fontSize: 16}}>
                            BUY NOW FOR $46.99
                        </Text>
                    </Pressable> 
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 3,
        //marginTop: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardContainerStyle: {
        backgroundColor: '#fff',
        padding: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        height: 300,
        width: 210,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        marginTop: 5,
        marginBottom: 6
    },
    cardContainerStyle: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginTop: 10
    },
    button: {
        backgroundColor: "#6200EE",
        borderRadius: 6,
        padding: 20,
        marginTop: 20,
        marginBottom: 150,
        marginHorizontal: 80
    },
    name: {
        fontWeight:'bold',
        fontSize: 24,
        fontFamily: "Roboto",
        lineHeight: 45,
        paddingHorizontal: 80,
        marginTop: 2
    },
    author: {
        fontSize: 16,
        color: "#666666",
        marginTop: 5,
        marginHorizontal: 5,
        fontFamily: "Roboto",
        paddingHorizontal: 130
    },
    description: {
        fontSize: 16,
        color: "black",
        marginTop: 15,
        paddingHorizontal: 40,
        fontFamily: "Roboto"
    }
});

export default DetailScreen;