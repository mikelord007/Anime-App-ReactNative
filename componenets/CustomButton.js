import react from 'react'
import { TouchableOpacity,Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


const CustomButton = ({buttonText, buttonContainerStyle, colors, onPress}) => {
    if (colors.length> 0){
        return (
            <TouchableOpacity onPress={onPress}>
                <LinearGradient style={{...buttonContainerStyle}} start={{x: 0, y:0}} end={{x:1,y:0}} colors={colors}>
                <Text style={ButtonStyle.textclr}>{buttonText}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    } else {
        return(
            <TouchableOpacity style={{...buttonContainerStyle}} onPress={onPress}>
                <Text style={[ButtonStyle.textclr, ButtonStyle.textnoclr]}>{buttonText}</Text>
            </TouchableOpacity>
        )
    }
}

export default CustomButton;

const ButtonStyle = StyleSheet.create({
    textclr:{
        textAlign: 'center',
        color: 'white',
        fontFamily: "Roboto-Bold",
        fontSize: 16,
        lineHeight: 22 
    },
    textnoclr:{
        color: 'white'
    }
})