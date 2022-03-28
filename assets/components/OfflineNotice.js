import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';
import Constants from 'expo-constants'
import { useNetInfo } from '@react-native-community/netinfo'

 const OfflineNotice = () => {
     const netInfo = useNetInfo()
     if(netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
        <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
        </View>
    );

    return null;
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: colors.primary,
       width: '100%',
       height: 40,
       position: 'absolute',
       zIndex: 1,
       top: Constants.statusBarHeight,
       justifyContent: 'center',
       alignItems: 'center'
    },
    text: {
        color: colors.white,
        fontWeight: 'bold'
    }
})

export default OfflineNotice
