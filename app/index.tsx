import React from "react";
import { SafeAreaView, Image, Text, StyleSheet, Platform, TouchableOpacity, Dimensions, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {useRouter} from "expo-router";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
    const route = useRouter()
    const handleIconPress = () => {
        route.push('/GettingStarted')
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={{ uri: "https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
                style={styles.image}
            />
            <LinearGradient
                colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
                style={styles.gradient}
            />
            <Text style={styles.text}>Mobile Savings App</Text>
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={handleIconPress}
                accessibilityLabel="Planet Icon"
                accessibilityRole="button">
                <Ionicons name="cash-sharp" size={62} color="#fff" />

            </TouchableOpacity>
                <Text style={styles.texts}>click me to start saving</Text>


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
        position: "absolute",
        top: 0,
        left: 0,
    },
    gradient: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
    },
    iconContainer: {
        position: "absolute",
        bottom: 40,
        alignSelf: "center",
        padding: 10,
    },
    text: {
        position: "absolute",
        top: 20,
        alignSelf: "center",
        padding: 10,
        color: "#f0f0f0",
        fontSize: width * 0.05,
        // fontWeight: "bold",
        zIndex: 1,
    },
    texts:{
        position: "absolute",
        bottom: 30,
        alignSelf: "center",
        color: "#f0f0f0",
        zIndex:1,
        textAlign: "center",
    }
});

export default HomeScreen;