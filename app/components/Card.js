import React from 'react';
import { View ,StyleSheet,Image} from 'react-native';

import AppText from '../components/AppText'
import colors from '../config/colors'

function Card({title,subTitle,image}) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image}/>
            <View style={styles.detailsContainer}>
            <AppText style = {styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    card : {
        borderColor: colors.white,
        marginBottom: 20,
        overflow : "hidden",
    },
    detailsContainer: {
        paddingTop:20,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius:15,
    },
    subTitle: {
        color:colors.secondary,
        fontWeight:"bold",
    },
    title : {
        marginBottom : 7,
    }
})

export default Card;