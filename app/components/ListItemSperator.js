import React from 'react';

import { StyleSheet,View } from 'react-native'
import colors from '../config/colors';

function ListItemSperator() {
    return (
        <View style={styles.sperator}/>
    );
}

const styles = StyleSheet.create({
    sperator : {
        width : '100%',
        height : 1,
        backgroundColor : colors.light, 

    }
})

export default ListItemSperator;