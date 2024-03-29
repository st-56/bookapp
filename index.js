import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import BookScreen from "../screen/BookScreen";
import DetailScreen from "../screen/DetailScreen";
import SettingScreen from "../screen/SettingScreen";
import booklist from "../json/book_section.json";
import WishlistScreen from "../screen/WishlistScreen";
import MyBookScreen from "../screen/MyBookScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyTab />
        </NavigationContainer>
    );
}

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={BookScreen}
            />
            <Stack.Screen 
                name="Detail"
                component={DetailScreen}
            />
        </Stack.Navigator>
    );
}

const MyTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{tabBarActiveTintColor:"#6200EE"}}
        >
            <Tab.Screen 
                name="HomeStack"
                component={HomeStack}
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    )
                }}
            />
            <Tab.Screen 
                name="Wishlist"
                component={WishlistScreen}
                options={{
                    title: "Wishlist",
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    },
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="bookmark" color={color} size={26} />
                    )
                }}
            />
            <Tab.Screen 
                name="My books"
                component={MyBookScreen}
                options={{
                    title: "My books",
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    },
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="book-open" color={color} size={26} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default Navigation;