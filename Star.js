import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Star = ({star}) => {
    let starnum = [];
    let i = 0;
    for(i = 0; i < 5; i++){
        if(star > i){
            starnum.push(
                <Image 
                    source={{uri: "https://github.com/st-56/ReactNative_wk3_BookList/blob/main/assets/bookimg/icon_star_filled.png?raw=true"}}
                    style={styles.star}
                    key={i}
                />
            )
        }
        else{
            starnum.push(
                <Image 
                    source={{uri: "https://github.com/st-56/ReactNative_wk3_BookList/blob/main/assets/bookimg/icon_star_empty.png?raw=true"}}
                    style={styles.star}
                    key={i}
                />
            )
        }
    }
    return(
        <View>
            <View style={styles.starnum}>
                {starnum}
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    star: {
        width: 14,
        height: 14
    },
    starnum: {
        flexDirection: "row",
        marginTop: 20
    }
});

export default Star;