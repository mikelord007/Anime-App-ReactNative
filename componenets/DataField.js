import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function DataField({keyName,keyValue}) {
    
  return (
    <View style={[DataStyle.mainView, keyName==='Synopsis'?DataStyle.newline: null]}>
      <Text style={DataStyle.KeyText}>{keyName}</Text>
      <Text style={DataStyle.ValueText}>{keyValue}</Text>
    </View>
  )
}


const DataStyle= StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 19,
        marginVertical: 9
    },
    KeyText: {
        color: 'black'
    },
    ValueText:{
        color: 'black'
    },
    newline: {
        flexDirection: 'column'
    }
})