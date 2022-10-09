import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { NativeBaseProvider, Box, Button, Input, } from "native-base";
import image from "../asessts/HomeImage/HomeImage.jpg"

export default function ShowAllCars({route, navigation }) {

    const [allCars, setAllCars] = React.useState([])
    const params = route.params;

    useEffect(() => {
        fetch('http://192.168.123.77:3000/cars/searchByUser', {
            method: 'post',
            body: JSON.stringify({
                userId: params.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => setAllCars(json.data))
            .catch((err) => { console.log(err) })

    })

    return (
        <NativeBaseProvider>
            <ImageBackground source={image} resizeMode='cover' style={styles.backgroundImage} >
                <View style={{ padding: 20 }}>
                    <FlatList
                        data={allCars}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={{ borderWidth: 1, marginBottom: '5%', padding: 5, borderColor: 'white' , borderRadius:5 }} 
                            onPress={() => {
                                navigation.navigate("ViewCar",{item})
                            }}>
                                <View style={styles.container}>
                                    <View style={styles.textContainer}>
                                        <Text style={{ marginBottom: 10, fontWeight: 'bold', color: 'white' }} >{item.car_id}</Text>
                                        <Text style={{ marginBottom: 10 }} >{item.brand} {item.model}</Text>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Image
                                            source={{ uri: item.front_image }}
                                            style={{ width: '100%', height: "100%" }}
                                        />
                                    </View>
                                </View>

                            </TouchableOpacity>
                        }
                    />
                </View>
            </ImageBackground>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: null,
        height: null,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column'
    }

});