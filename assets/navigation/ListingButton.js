import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'


const ListingButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name='plus-circle' color={colors.white} size={40}/>
        </View>
        </TouchableOpacity>
    ) 
}

const styles = StyleSheet.create({
    container: {
        borderColor: colors.white,
        borderWidth: 3,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.primary,
        bottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ListingButton
