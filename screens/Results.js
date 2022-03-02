import React, { useEffect } from 'react'
import { StyleSheet, ScrollView,View,Image,TextInput, Text, FlatList } from 'react-native'
import AnimeCard from '../componenets/AnimeCard'
import searchicon from '../assets/icons/searchgray.png'

export default function Results({ navigation,route }) {
  const [text,setText] = React.useState(route?.params?.text)
  const [apiData,setApiData] = React.useState(null)
  // console.log(apiData?.length)
  
  const fetchData = async () => {
    text && fetch(`https://api.jikan.moe/v4/anime?q=${text}&limit=10&sfw=true`).then(e => e.json()).then(e => setApiData(e.data))
    
  }

  useEffect(() => {
    fetchData()
  },[])

  useEffect(() => {
    setText(route.params.text)
  },[route.params.text])


  return (
    <ScrollView overScrollMode='never' contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }} style={resultsStyle.mainView}>
      
      <View style={resultsStyle.serachBar}>
          <Image source={searchicon} style={resultsStyle.searchButton}/>
          <TextInput value={text} onChangeText={setText} placeholderTextColor="green"  style={resultsStyle.searchInput} placeholder='Search here' onSubmitEditing={fetchData}></TextInput>
      </View>
      <View style={resultsStyle.AnimeCardContainer}>
      { apiData && <FlatList
        data={apiData}
        keyExtractor={i=> i.mal_id} 
        keyboardDismissMode='on-drag'
        showsVerticalScrollIndicator={false}
        renderItem={(item)=> {
          return( 
            <AnimeCard  navigation={navigation} genres={item?.item?.genres} images={item?.item?.images.jpg.image_url} title={item?.item?.title_english?item?.item?.title_english: item?.item?.title} rating={item?.item?.score} wholeItem={item} />
          )
          }}
        />}
        { apiData?.length === 0 && <Text style={{flex:1, fontSize: 24}}>No Results</Text>}
        </View>
    </ScrollView>
  )
}


const resultsStyle = StyleSheet.create({
  mainView:{
    flex:1,
    backgroundColor: 'white',
    
    // alignItems: 'center'
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
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#DCDCDC',
    display: 'flex',
    width: 380
  },
  imgStyle:{
    width: 80,
    height: 80,
    borderRadius: 5
  },
  detailsView:{
    width: '65%',
    paddingHorizontal: 10
  },
  detailsText:{
    flex: 1,
    fontSize: 23,
    fontFamily: 'serif'
  },
  detailsSecondText:{
    fontSize: 14,
    color: '#5C5B5B'
  },
  AnimeCardContainer:{
    marginTop: 10,
    flex: 1,
    marginBottom: 70
  }
})