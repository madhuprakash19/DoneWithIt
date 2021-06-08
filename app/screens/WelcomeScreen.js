import React from 'react';
import { Image, ImageBackground ,StyleSheet,View,Text} from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        blurRadius={5}
        source={require("../assets/background.jpg")}
        style={styles.background}
        >
            <View style={styles.logoContainer}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
            <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
            <AppButton title={"Login"}/>
            <AppButton title={"Register"} color={"secondary"}/>
            </View>
        </ImageBackground>
            
    );
}

const styles = StyleSheet.create({
    background :{
        flex : 1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    buttonsContainer:{
        padding:20,
        width:'100%'
    },
    logo : {
        width :100,
        height : 100,
        
        
    },
    logoContainer : {
        position : 'absolute',
        top : 120, 
        alignItems : "center",
    },
    tagline : {
        fontSize : 20,
        fontWeight : "300",
        paddingVertical : 30,

    }
})

export default WelcomeScreen;