import React from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Logo from '../../../../assets/logo.png'

const screenWidth = Dimensions.get("screen").width
const screenHeight= Dimensions.get("screen").height

export function Header(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} style={styles.img}/>
                <Text style={styles.welcomeTitle}>Hello, Luiz!</Text>
                <Text style={styles.subtitle}>Find the best producers near you!</Text>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        width: screenWidth,
        height: screenHeight,
        backgroundColor:"#F6F6F6",
    },  
    header:{
      padding: 16,
      backgroundColor: '#e4e4e4',
    },
    img:{
        width: 90,
        height: 36
    },
    welcomeTitle:{
        fontSize: 26,
        color: "#000",
        marginTop: 24,
        lineHeight: 42,
        fontWeight: "bold",
    },
    subtitle:{
        fontSize: 14,
        color: '#000',
        lineHeight: 24
    }

  })