import React from "react";
import {Text, StyleSheet, View} from "react-native";


export default function Exercicios(){

    return(

        <View style={styles.container}>
        <Text>Exercicios</Text>
        </View>
    );




}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5a58d4',
        alignItems: 'center',
        padding: 30
        //justifyContent: 'center'
    },
});