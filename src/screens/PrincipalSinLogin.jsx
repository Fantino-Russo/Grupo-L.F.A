import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function PantallaSinLogin(){
    return(
        <View>
            <Text style={styles.texto}>En este return colocar los componentes que queres colocar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    texto:{
        color: "#090353",
        fontSize: 30,
    },
})