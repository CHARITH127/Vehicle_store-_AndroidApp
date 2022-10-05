import React, { useId } from 'react'
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Alert } from "react-native";
import { NativeBaseProvider, Box, Button, Input } from "native-base";
import image from "../asessts/HomeImage/HomeImage.jpg"

export default function WelcomePage({ navigation }) {

    const [show, setShow] = React.useState(false);
    const [userId, setUserId] = React.useState("")
    const [password, setPassword] = React.useState("")

    loginCheck = async () => {

        await fetch('http://192.168.123.77:3000/user/search', {
            method: 'POST',
            body: JSON.stringify({
                userId: userId,
                password: password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.message == "please check the username and password") {
                    Alert.alert("Error", "please check the username and password");
                } else {
                    navigation.navigate("Profile",{
                        userId:json.data[0].user_id,
                        user_name:json.data[0].user_name,
                        password:json.data[0].password
                    })
                }
            })
            .catch((err) => { console.log(err) })
    }

    return (
        <NativeBaseProvider>
            <ImageBackground source={image} resizeMode='cover' style={styles.backgroundImage} >
                <View style={styles.container}>
                    <View style={[styles.heading, { flex: 4 }]}>
                        <Text style={styles.text}>Smart Car Store</Text>
                    </View>

                </View>
                <SafeAreaView style={styles.container1}>
                    <ScrollView style={styles.scrollView}>
                        <View>
                            <View style={[styles.textFieldInput]}>
                                <Input w='75%' style={styles.userInputFields} variant="rounded" placeholder="User Id" value={userId}
                                    onChangeText={(e) => { setUserId(e) }}
                                />
                            </View>
                            <View style={[styles.textFieldInput]}>
                                <Input w='75%' style={styles.userInputFields} type={show ? "text" : "password"} variant="rounded" placeholder="password"
                                    value={password}
                                    onChangeText={(e) => { setPassword(e) }}
                                />
                            </View>
                            <View style={[styles.textFieldInput]}>
                                <Button variant='subtle' colorScheme="secondary" style={styles.loginButton} onPress={loginCheck}>Login</Button>
                            </View>
                        </View>
                        <View style={[styles.signupContaniner]}>
                            <Text style={styles.subtext
                            }>Don't have an account ? | please sign up</Text>
                            <Button style={styles.signUpButton} variant='ghost' onPress={() => { navigation.navigate("Registration") }}>Sign up</Button>
                        </View>

                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: null,
        height: null,
    },
    heading: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: '8%'
    },
    textFieldInput: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '8%'
    },
    userInputFields: {
        color: 'white',
    },
    loginButton: {
        width: '50%',

    },
    signupContaniner: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtext: {
        color: "white",
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    signUpButton: {
        marginTop: '2%',
        width: '50%',
        marginBottom: '3%'

    },
    // scroll view{ flex: 2 }
    container1: {
        flex: 2,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
});
