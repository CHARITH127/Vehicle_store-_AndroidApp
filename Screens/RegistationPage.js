import React from 'react'
import { ImageBackground,StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Button, Input } from "native-base";
import image from "../asessts/HomeImage/HomeImage.jpg"

export default function () {

    const [show, setShow] = React.useState(false);

    return (
        <NativeBaseProvider>
            <ImageBackground source={image} resizeMode='cover' style={styles.backgroundImage} >
                <View style={styles.container}>
                    <View style={[styles.hedingContainer, { flex: 2 }]}>
                        <Text style={styles.heading}>User Registration</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <View style={[styles.textFieldContainer, { flex: 1 }]}>
                            <Input w='75%' style={{ color: "white" }} variant="rounded" placeholder="User Id" />
                        </View>
                        <View style={[styles.textFieldContainer, { flex: 1 }]}>
                            <Input w='75%' style={{ color: "white" }} variant="rounded" placeholder="User Name" />
                        </View>
                        <View style={[styles.textFieldContainer, { flex: 1 }]}>
                            <Input w='75%' style={{ color: "white" }} type={show ? "text" : "password"} variant="rounded" placeholder="Password" />
                        </View>
                        <View style={[styles.textFieldContainer, { flex: 2 }]}>
                            <Button w='75%' style={{ color: 'black' }} size="lg" variant="subtle" colorScheme="secondary">
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