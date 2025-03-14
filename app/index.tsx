import React from "react";
import {SafeAreaView, Image, Text, StyleSheet, Platform, TouchableOpacity, Dimensions} from "react-native";
import {Ionicons} from "@expo/vector-icons";
const {width} = Dimensions.get("window")
const HomeScreen = () => {
    const handleIconPress = () => {
        console.log('%cHello, styled console!', 'color: blue; font-size: 20px; font-weight: bold; background-color: yellow; padding: 5px; border-radius: 5px;');

    }
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={{ uri: "https://plus.unsplash.com/premium_photo-1681589453442-3b383a67fcfb?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
                style={styles.image}
            />
            <Text style={styles.text}>Mobile Savings App</Text>
            <TouchableOpacity
                style={styles.iconContainer} onPress={handleIconPress}
                accessibilityLabel="Planet Icon" accessibilityRole="button">
                <Ionicons name="planet-outline" size={62} color="#fff" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Platform.OS === "ios" ? "#f0f0f0" : "#000",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: Platform.OS === "ios" ? "cover" : "cover",
    },
    iconContainer:{
        position: "absolute",
        bottom: 40,
        alignSelf: "center",
        padding: 10,
    },
    text:{
      position: "absolute",
      top: 20,
      alignSelf: "center",
      padding: 10,
      color: "#f0f0f0",
      fontSize: width * 0.05,
      fontWeight: "bold"
    }
});

export default HomeScreen;
