import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from '../components/AppText'
import colors from "../config/colors"
import ListItems from "../components/ListItems"

function ListDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require("./images/g-wagon.jpg.jpg")}/>
            <View style={styles.textContainer}>
                <AppText style={styles.text}>G-Wagon for sale</AppText>
                <AppText style={styles.price}>$100,000</AppText>
                <View style={styles.container}>
                    <ListItems 
                        image={require("./images/avatar.png")}
                        title="Otokina Greatness"
                        subTitle="5 listing"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40
    },
    image: {
        width: "100%",
        height: 300
    },
    textContainer: {
        padding: 20
    },
    text: {
        fontSize: 24,
        fontWeight: "bold"
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 5,
        color: colors.secondary
    }
});

export default ListDetailsScreen;