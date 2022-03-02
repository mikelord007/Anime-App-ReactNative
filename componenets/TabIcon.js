import React from 'react'
import { View,Image,Text, StyleSheet } from 'react-native'

export default function TabIcon({focused, iconActive, iconDefault}) {
    const TabIconStyle = StyleSheet.create({
        tabview: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 80,
            width: 50
        },
        img: {
            width: 30,
            height: 30,
            tintColor: focused? 'green': 'grey'
        },
        focusedStyle: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 5,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            backgroundColor: 'green'
        }
    })
  return (
    <View style={TabIconStyle.tabview}>
        <Image source={focused?iconActive:iconDefault} resizeMode='contain' style={TabIconStyle.img} />
        {focused && <View
        style={TabIconStyle.focusedStyle}>
        </View>}
    </View>
  )
}
