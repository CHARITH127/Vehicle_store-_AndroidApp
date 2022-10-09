import React from 'react'
import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Button, Input } from "native-base";
import image from "../asessts/HomeImage/HomeImage.jpg"

export default function ({ navigation }) {

    const [show, setShow] = React.useState(false);
    const [userId, setUserId] = React.useState("")
    const [userName, setUserName] = React.useState("")
    const [password, setPassword] = React.useState("")

    handlerOnUserSave = async () => {
        await fetch('http://192.168.123.77:3000/user', {
            method: 'POST',
            body: JSON.stringify({
                userId: userId,
                user_name: userName,
                password: password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.message == "successfully saved") {
                    Alert.alert(
                        "Done",
                        "Sucessfully registered please login to the system for use the service",
                        [
                          {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                          },
                          { text: "OK", onPress: () => {
                            navigation.navigate("Welcome")
                          }}
                        ]
                      );
                } else {
                    Alert.alert("Done","Ca't saved")
                }
            })
            .catch((err) => { console.log(err) })
    }

    return (
        <NativeBaseProvider>
            <ImageBackground source={image} resizeMode='cover' style={styles.backgroundImage} >
                <View style={styles.container}>
                    <View style={[styles.hedingContainer, { flex: 2 }]}>
                        <Text style={styles.heading}>User Registration</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <View style={[styles.textFieldContainer, { flex: 1 }]}>
                            <Input w='75%' style={{ color: "white" }} variant="rounded" placeholder="User Id"
                                value={userId}
                                onChangeText={(e) => { setUserId(e) }}

                            />
                        </View>
                        <View style={[styles.textFieldContainer, { flex: 1 }]}>
                            <Input w='75%' style={{ color: "white" }} variant="rounded" placeholder="User Name"
                                value={userName}
                                onChangeText={(e) => { setUserName(e) }}
                            />
                        </View>
                        <View style={[styles.textFieldContainer, { flex: 1 }]}>
                            <Input w='75%' style={{ color: "white" }} type={show ? "text" : "password"} variant="rounded" placeholder="Password"
                                value={password}
                                onChangeText={(e) => { setPassword(e) }}
                            />
                        </View>
                        <View style={[styles.textFieldContainer, { flex: 2 }]}>
                            <Button w='75%' style={{ color: 'black' }} size="lg" variant="subtle" colorScheme="secondary" onPress={handlerOnUserSave}>
                                Register
                            </Button>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </NativeBaseProvider>

    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: null,
        height: null,
    },
    container: {
        flex: 1
    },
    hedingContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
    },
    textFieldContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});