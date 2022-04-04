import * as SecureStore from 'expo-secure-store'


const key = 'user'

const storeData = async userData => {
    try {
        await SecureStore.setItemAsync(key, userData)
    } catch (error) {
        console.log('Error storing the user', error)
    }
}

const getData = async() => {
    try {
        return await SecureStore.getItemAsync(key)
    } catch (error) {
        console.log('Error getting the user', error)
    }
}

const removeData = async() => {
    try {
        await SecureStore.deleteItemAsync(key)
    } catch (error) {
        console.log('Error removing the user', error)
    }
}

export default {
    storeData,
    getData,
    removeData
}