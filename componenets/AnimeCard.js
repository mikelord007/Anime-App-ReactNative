import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View,Image,TextInput, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'



export default function AnimeCard({images, title, genres, rating,navigation}) {
  if(title.length> 15) title = title.slice(0,15) + '...'
  if(genres.length> 3) genres = genres.slice(0,3)


  return (
    <TouchableOpacity activeOpacity={0.5} style={resultsStyle.resultsRow } onPress={()=> {navigation.navigate("Details")}}>
        <Image source={{uri: images}} style={resultsStyle.imgStyle}/>
        <View style={resultsStyle.detailsView}>
          <Text style={resultsStyle.detailsText}>{title}</Text>
          <View style={resultsStyle.secondary}>
            <Text style={resultsStyle.detailsSecondText}>{genres.reduce((p,c)=> p  + c.name + " | " ,'').slice(0,-2)}</Text>
            <Text style={resultsStyle.detailsThirdText}>{rating}</Text>
          </View>
        </View>
      </TouchableOpacity>

  )
}


const resultsStyle = StyleSheet.create({
    mainView:{
      flex:1,
      backgroundColor: 'white',
      alignItems: 'center'
    },
    topText:{
      fontSize: 40,
      marginTop: 4,
      color: 'green'
    },
    serachBar:{
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      borderRadius: 10,
      paddingHorizontal: '3%',
      backgroundColor: '#DCDCDC',
      width: '80%',
      marginTop: 30
    },
    searchButton:{
      resizeMode: 'contain',
      width: 30,
      tintColor: 'green'
    },
    searchInput:{
      marginLeft: 20,
      width: '78%',
      marginRight: 30,
      height: '100%',
      color: 'black'
    },
    resultsRow:{
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
      paddingRight: 0,
      marginTop: 10,
      borderRadius: 10,
      backgroundColor: '#DCDCDC',
      display: 'flex',
      width: 360,
      marginTop: 10,
    },
    imgStyle:{
      width: 80,
      height: 80,
      borderRadius: 5
    },
    detailsView:{
      width: '65%',
      paddingLeft: 10,
      paddingRight: 0
    },
    detailsText:{
      flex: 1,
      fontSize: 22,
      fontFamily: 'serif'
    },
    detailsSecondText:{
      fontSize: 14,
      color: '#5C5B5B'
    },
    secondary:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  })