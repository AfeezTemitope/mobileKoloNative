import { LinearGradient } from "expo-linear-gradient";
import {
    Dimensions,
    Image,
    Platform,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    TextInput
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useState} from "react";

const { width } = Dimensions.get("window");

const GettingStarted = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const showAlert = () => {
        console.log('show');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={{
                    uri: "https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }}
                style={styles.image}
            />
            <LinearGradient
                colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
                style={styles.gradient}
            />
            <Text style={styles.headerText}>Welcome Back Dear Investor!</Text>
            <View style={styles.inputContainer}>

                <View style={styles.inputWrapper}>
                    <Ionicons name="person-sharp" size={20} style={styles.icon}/>
                    <TextInput
                        style={styles.input}
                        placeholder="username"
                        value={username}
                        onChangeText={setUsername}
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Ionicons name="lock-closed-outline" size={20} style={styles.icon}/>
                    <TextInput
                        style={styles.input}
                        placeholder="password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
            </View>

            <TouchableOpacity
                style={styles.iconContainer}
                onPress={showAlert}
                accessibilityLabel="Planet Icon"
                accessibilityRole="button"
            >
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:  "#f0f0f0",
        alignItems: "center"
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
        borderRadius: 5,
        width: '60%',
        padding: 10,
        position: "absolute",
        bottom: 40,
        alignSelf: "center",
        backgroundColor: 'rgba(255,255,255,0.4)',
    },
    text: {
        color: '#f0f0f0',
        textAlign: 'center'
    },
    inputContainer: {
        position: "absolute",
        bottom: 120,
        left: 30,
        right: 30,
        padding: 20,
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding: 10,
        borderRadius: 15,
        borderColor: '#000000',
    },
    icon: {
        marginRight: 20,
    },
    input: {
        flex: 1,
        height: 40,
        color: '#000',
    },
    headerText: {
        position: "absolute",
        color: '#f0f0f0',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        bottom: 350,
        backgroundColor: '#000'
    }
});

export default GettingStarted;