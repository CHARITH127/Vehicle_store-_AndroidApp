import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Button, Input } from "native-base";
import image from "../asessts/HomeImage/carImage2.jpg"

export default function UserProfile({ route, navigation }) {

    const params = route.params;

    handlerOnSaveCar = () => {
        navigation.navigate("Save", {
            userId: params.userId,
            user_name: params.user_name,
            password: params.password
        })
    }

    handlerOnShowAllCars = () => {
        navigation.navigate("ShowAll", {
            userId: params.userId,
            user_name: params.user_name,
            password: params.password
        })
    }

    return (
        <NativeBaseProvider>
            <ImageBackground source={image} resizeMode='cover' style={styles.backgroundImage} >
                <View style={styles.container}>
                    <View style={[styles.hedingContainer, { flex: 3 }]}>
                        <Text style={styles.heading}>Welcome</Text>
                        <Text style={styles.userName}>{params.user_name}</Text>
                    </View>

                    {/* option buttons-------- */}
                    <View style={{ flex: 2 }}>
                        <View style={[styles.buttonContainer, { flex: 1 }]}>
                            <Button w='75%' style={{ color: 'black' }} size="lg" variant="subtle" colorScheme="secondary" onPress={handlerOnSaveCar} >
                                Save a Car
                            </Button>
                        </View>
                        <View style={[styles.buttonContainer, { flex: 1 }]}>
                            <Button w='75%' style={{ color: 'black' }} size="lg" variant="subtle" colorScheme="secondary" onPress={handlerOnShowAllCars}>
                                Show All Cars
                            </Button>
                        </View>
                        <View style={[styles.buttonContainer, { flex: 1 }]}>
                            <Button w='75%' style={{ color: 'black' }} size="lg" variant="subtle" colorScheme="secondary">
                                Delete All the collection
                            </Button>
                        </View>
                    </View>
                    <View style={{ flex: 2 }}></View>
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
        flex: 1,
        flexDirection: 'column'
    },
    hedingContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
    },
    userName: {
        color: "white",
        fontSize: 50,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});
