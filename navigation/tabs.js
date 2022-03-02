import React from "react";
// import {
//     View,
// } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TabIcon } from "../componenets";
import bookmarkgray from '../assets/icons/bookmargray.png'
import homegreen from '../assets/icons/homegreen.png'
import homegray from '../assets/icons/homegray.png'
import searchgreen from '../assets/icons/serachgreen.png'
import searchgray from '../assets/icons/searchgray.png'
import settingsgray from '../assets/icons/settingsgray.png'
import settingsgreen from '../assets/icons/settingsgreen.png'
import bookmarkgreen from '../assets/icons/bookmarkgreen.png'

import { Home,ResultDetails,Results } from "../screens"
// import { icons } from "../constants";

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                elevation: 0,
                backgroundColor: "#FCF9F9",
                borderTopColor: "transparent",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                height: '9%'
            }
        }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} iconActive={homegreen} iconDefault={homegray}/>
                }}
            />
            <Tab.Screen
                name="Results"
                component={Results}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} iconActive={searchgreen} iconDefault={searchgray}/>
                }}
            />
            <Tab.Screen
                name="Details"
                component={ResultDetails}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} iconActive={bookmarkgreen} iconDefault={bookmarkgray}/>
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} iconActive={settingsgreen} iconDefault={settingsgray}/>
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;