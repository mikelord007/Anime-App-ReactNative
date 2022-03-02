import React,{useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    StatusBar,
    Dimensions
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import wallp1 from '../assets/wallanime/animewall1.jpg'

import { CustomButton } from '../componenets'

// const wallpapers = [wallp1,wallp2,wallp3,wallp4,wallp5]

const Login = ({ navigation }) => {


    const renderHeader = () => {
        return(
            <View style={loginstyle.headerView}>
                <ImageBackground source={wallp1} style={loginstyle.headerImgBG}>
                    <LinearGradient style={loginstyle.lienarFade} start={{x: 0, y:0}} end={{x:0,y:1}} colors={['transparent','black']}>
                        <Text style={loginstyle.linearFadeText}>Find Anime You Love Easily</Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
        )
    }

    const renderDetail = () => {
        return(
            <View style={loginstyle.detailView}>
                <Text style={loginstyle.detailText}>Discover From More Than 1000+ Different Collection Of Animes!</Text>
                <View style={loginstyle.buttonCotainer}>
                    <CustomButton buttonText={"Login"} buttonContainerStyle={loginstyle.buttonContainer1} colors={['#229879', '#2AD699']} onPress={() => navigation.navigate("Mark")} />
                    <CustomButton buttonText={"Sign Up"} buttonContainerStyle={loginstyle.buttonContainer2} colors={[]} onPress={() => navigation.navigate("Home")} />
                </View>
            </View>
        )
    }
    return (
        <View style={loginstyle.mainView}>
            <StatusBar barStyle='light-content'/>
            {renderHeader()}
            {renderDetail()}
        </View>
    )
}

export default Login;

const loginstyle = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "black"
    },
    headerView: {
        height: Dimensions.get("window").height> 700? "65%":"60%"
    },
    headerImgBG: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    linearFade: {
        height: 200,
        justifyContent: 'flex-end',
    },
    linearFadeText:{
        width: "80%",
        color: '#fff',
        fontSize: 40,
        lineHeight: 45,
        marginLeft: 24,
        fontWeight: '900'
    },
    detailView: {
        flex: 1,
        paddingHorizontal: 24
    },
    detailText:{
        marginTop: 5,
        width: '70%',
        color:"#777777",
        fontSize: 16,
        lineHeight: 22,
        fontSize: 16,
        lineHeight: 22
    },
    buttonCotainer:{
        flex:1,
        justifyContent: 'center'
    },
    buttonContainer1: {
        paddingVertical: 18,
        borderRadius: 20
    },
    buttonContainer2: {
        marginTop: 12,
        paddingVertical: 18,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 0.5
    }
})