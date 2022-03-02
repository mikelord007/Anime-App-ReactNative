import React from 'react'
import { View,StyleSheet,Image, ImageBackground, TextInput} from 'react-native'
import animeback from '../assets/images/animeback.jpg'
import searchicon from '../assets/icons/searchgray.png'

export default function Home({ navigation }) {
  const [text,setText] = React.useState(null)

  return (
    <ImageBackground source={animeback} style={homeStyle.coolbg}>
      <View style={homeStyle.mainHome}>
        <View style={homeStyle.serachBar}>
          <Image source={searchicon} style={homeStyle.searchButton}/>
          <TextInput value={text} onChangeText={setText} placeholderTextColor="green"  style={homeStyle.searchInput} placeholder='Search here' onSubmitEditing={() => navigation.navigate("Results",{text})}></TextInput>
        </View>
      </View>
    </ImageBackground>
  )
}


const homeStyle = StyleSheet.create({
  mainHome: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coolbg:{
    flex: 1,
    resizeMode: 'cover'
  },
  serachBar: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: '3%',
    backgroundColor: 'white',
    width: '80%',
  },
  searchButton: {
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
  }
})