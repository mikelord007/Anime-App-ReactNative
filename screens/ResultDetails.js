import React from 'react'
import { FlatList, Text,Image, View, StyleSheet } from 'react-native'
import { DataField } from '../componenets'

export default function ResultDetails({ navigation,route }) {

  const item = route.params.wholeItem
  const datalist = [{keyName: 'Aired From', keyValue:  item.item.aired.from, key:1}
                   ,{keyName: 'Aired Till', keyValue:  item.item.airing?'Currently On Air':item.item.airing.to, key:2}
                   ,{keyName: 'Rating', keyValue: item.item.rating, key:3}
                   ,{keyName: 'Score', keyValue: item.item.score, key:4}
                   ,{keyName: 'Synopsis', keyValue: item.item.synopsis, key:5}
                   ,{keyName: 'trailer', keyValue: item.item.trailer.embed_url, key:6}
                    ]


  return (
    <View style={RDstyle.mainView}>
      <Image source={{uri: item?.item?.images?.jpg?.large_image_url}} style={RDstyle.imgStyle} />
      <FlatList
        data={datalist}
        keyExtractor={i=> i.keyName} 
        keyboardDismissMode='on-drag'
        showsVerticalScrollIndicator={false}
        renderItem={(item)=> {
          return( 
            <DataField keyName={item.item.keyName} keyValue={item.item.keyValue} />
          )
          }}
      />
    </View>
  )
}


const RDstyle= StyleSheet.create({
  mainView: {
    alignItems: 'center'
  },
  imgStyle:{
    width: "90%",
    height: "40%",
    margin: 4,
    resizeMode: 'contain',
    marginBottom: 33
  },
})