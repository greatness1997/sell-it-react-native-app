import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import AppText from './AppText';
import Icon from './Icon'

function CategoryPickerItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        alignItems: "center",
        width: "33%"
    },
    label: {
        marginTop: 5,
        textAlign: "center"
    }
});

export default CategoryPickerItem;