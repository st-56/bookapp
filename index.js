import React from "react";
import { Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import BookScreen from "../screen/BookScreen";
import DetailScreen from "../screen/DetailScreen";
import SettingScreen from "../screen/SettingScreen";
import DisplaySettingScreen from "../screen/DisplaySettingScreen";
import AccountScreen from "../screen/AccountScreen";
import Header from "../component/Header";
import booklist from "../json/book_section.json";
import WishlistScreen from "../screen/WishlistScreen";
import MyBookScreen from "../screen/MyBookScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}

const HomeStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={BookScreen}
                options={{
                    //headerShown: false,
                    header: () => <Header />,
                    title: booklist.title,
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    },
                    headerLeft: () => (
                     <MaterialCommunityIcons 
                        name={'menu'}
                        size={20}
                        onPress={() => navigation.openDrawer()}
                        style={{marginRight: 20}}
                     />   
                    )
                }}
            />
            <Stack.Screen 
                name="Detail"
                component={DetailScreen}
                options={({ route }) => ({
                    headerShown: false,
                    title: route.params.title,
                    headerStyle: {
                        backgroundColor: "white"
                    },
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    }
                })}
            />
        </Stack.Navigator>
    );
}

const WishlistStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Wishlist"
                component={WishlistScreen}
                options={{
                    //headerShown: false,
                    header: () => <Header />,
                    headerLeft: () => (
                        <MaterialCommunityIcons 
                            name={'menu'}
                            size={26}
                            onPress={() => navigation.openDrawer()}
                        />
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons name={'magnify'} size={26} />
                    )
                }}    
            />
        </Stack.Navigator>
    );
}

const MyBookStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="MyBook"
                component={MyBookScreen}
                options={{
                    //headerShown: false,
                    header: () => <Header />,
                    headerLeft: () => (
                        <MaterialCommunityIcons 
                            name={'menu'}
                            size={26}
                            onPress={() => navigation.openDrawer()}
                        />
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons name={'magnify'} size={26} />
                    )
                }}    
            />
        </Stack.Navigator>
    );
}

const AccountStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Account"
                component={AccountScreen}
                options={{
                    //headerShown: false,
                    header: () => <Header />,
                    headerLeft: () => (
                        <MaterialCommunityIcons 
                            name={'menu'}
                            size={20}
                            onPress={() => navigation.openDrawer()}
                            style={{marginRight: 20}}
                        />
                    ),
                }}    
            />
        </Stack.Navigator>
    );
}

const MyTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{tabBarActiveTintColor:"#6200EE", headerShown: false}}
        >
            <Tab.Screen 
                name="HomeStack"
                component={HomeStack}
                options={{
                    //headerShown: false,
                    title: "Home",
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    )
                }}
            />
            <Tab.Screen 
                name="WishlistStack"
                component={WishlistStack}
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
                name="MybookStack"
                component={MyBookStack}
                options={{
                    title: "Mybook",
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

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}
            contentContainerStyle={{paddingTop: 0}}
        >
            <Image
                style={styles.drawImg}
                source={{uri: "https://github.com/st-56/ReactNative_wk3_BookList/blob/main/assets/bookimg/img_avatar.png?raw=true"}}
            />
            <Text style={styles.username}>
                May
            </Text>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    drawImg: {
        width: 50,
        height: 50,
        marginTop: 30,
        marginLeft: 20
    },
    username: {
        fontSize: 24,
        marginBottom: 20,
        marginLeft: 20,
        fontWeight: "bold"
    }
});

const MyDrawer = () => {
    return (
        <Drawer.Navigator 
            initialRouteName="HomeStack"
            screenOptions={{
                drawerActiveBackgroundColor: "white",
                drawerActiveTintColor: "#6200EE",
                drawerInactiveTintColor: "gray",
                drawerStyle: {width: 250},
                drawerLabelStyle: {fontSize: 18, fontWeight: '400'}
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen 
                name="MyTab"
                component={MyTab}
                options={{
                    headerShown: false,
                    drawerLabel: "Home",
                    drawerIcon: ({color}) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    )
                }}
            />
            <Drawer.Screen 
                name="AccountStack"
                component={AccountStack}
                options={{
                    headerShown: false,
                    drawLabel: "Account",
                    drawerIcon: ({color}) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                    )
                }}
            />
            <Drawer.Screen 
                name="SettingStack"
                component={SettingStack}
                options={{
                    //headerShown: false,
                    header: () => <Header />,
                    drawLabel: "Setting",
                    drawerIcon: ({color}) => (
                        <MaterialCommunityIcons name="cog" color={color} size={26} />
                    )
                }}
            />
        </Drawer.Navigator>
    );
}

const SettingStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Setting"
                component={SettingScreen}
                options={{
                    headerShown: false,
                    title: "Setting",
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    },
                    headerLeft: () => (
                        <MaterialCommunityIcons 
                            name={'menu'}
                            size={20}
                            onPress={() => navigation.openDrawer()}
                            style={{marginRight: 20}}
                        />
                    ),
                }}
            />
            <Stack.Screen 
                name="DisplaySettingScreen"
                component={DisplaySettingScreen}
                options={{
                    headerShown: false,
                    title: "Display",
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    }
                }}
            />
        </Stack.Navigator>
    );
}

export default Navigation;