import React, { useId, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Alert } from "react-native";
import { NativeBaseProvider, Button, Input, Icon, Ionicons, Image, Select } from "native-base";
import image from "../asessts/HomeImage/carImage2.jpg"
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function SaveCarPage({ route, navigation }) {

    const userId = route.params.userId;

    const [frontPhoto, setFrontPhoto] = useState(null);
    const [backPhoto, setBackPhoto] = useState(null);
    const [sidePhoto, setSidePhoto] = useState(null);
    const [interiorPhoto, setInteriorPhoto] = useState(null);
    const [carNumber, setCarNumber] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [yearOfManufacture, setYearOfManufacture] = useState("");
    const [milage, setMilage] = useState("");
    const [engineCapacity, setEngineCapacity] = useState("");
    const [gearType, setGearType] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [options, setOptions] = useState("");
    const [ownerContactNumber, setOwnerContactNumber] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");



    handlerChoosefrontPhoto = () => {
        const options = {
            noData: true
        };
        launchImageLibrary({ noData: true }, response => {
            if (response.assets[0].uri) {
                setFrontPhoto(response.assets[0].uri)
            }
        });
    };
    handlerChoosebackPhoto = () => {
        const options = {
            noData: true
        };
        launchImageLibrary({ noData: true }, response => {
            if (response.assets[0].uri) {
                setBackPhoto(response.assets[0].uri)
            }
        });
    };
    handlerChooseSidePhoto = () => {
        const options = {
            noData: true
        };
        launchImageLibrary({ noData: true }, response => {
            if (response.assets[0].uri) {
                setSidePhoto(response.assets[0].uri)
            }
        });
    };
    handlerChooseInteriorPhoto = () => {
        const options = {
            noData: true
        };
        launchImageLibrary({ noData: true }, response => {
            if (response.assets[0].uri) {
                setInteriorPhoto(response.assets[0].uri)
            }
        });
    };

    saveData = async () => {
        console.log(frontPhoto + " " + backPhoto + " " + sidePhoto + " " + interiorPhoto + " " + carNumber + " " + brand + " " + model + " " + yearOfManufacture + " " + milage + " " + engineCapacity + " " + gearType + " " + fuelType + " " + options + " " + ownerContactNumber + " " + location + " " + price)
        await fetch('http://192.168.123.77:3000/cars', {
            method: 'POST',
            body: JSON.stringify({

                frontImage: frontPhoto,
                sideImage: sidePhoto,
                backImage: backPhoto,
                interiorImage: interiorPhoto,
                user_Id: userId,
                car_ID: carNumber,
                owner_Contact: ownerContactNumber,
                brand_: brand,
                model_: model,
                yearOfManu_: yearOfManufacture,
                milage_: milage,
                location_: location,
                option_: options,
                engine_Capacity: engineCapacity,
                gear_Type: gearType,
                fual_type:fuelType,
                price_: price

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                let message = json.message
                Alert.alert("Done",message)
            })
            .catch((err) => { Alert.alert("Failt to save",json.message) })
    }

    return (
        <NativeBaseProvider>
            <ImageBackground source={image} resizeMode='cover' style={styles.backgroundImage} >
                <View style={styles.container}>
                    <View style={[styles.hedingContainer, { flex: 1 }]}>
                        <Text style={styles.heading}>Add a Car</Text>
                    </View>
                    <View style={[{ flex: 7 }]}>
                        <SafeAreaView style={styles.container1}>
                            <ScrollView style={styles.scrollView}>
                                <View style={{ flex: 4, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                    <View style={styles.imageContainer, { width: '44%', margin: '3%' }} >
                                        <Image source={{
                                            uri: frontPhoto
                                        }} alt="Alternate Text" size="xl" />

                                        <Button w='100%'
                                            style={{ color: 'black', marginTop: '2%', marginBottom: '3%' }}
                                            variant="subtle"
                                            colorScheme="secondary"
                                            onPress={this.handlerChoosefrontPhoto}
                                        >
                                            Upload front image
                                        </Button>
                                    </View>
                                    <View style={styles.imageContainer, { width: '44%', margin: '3%' }} >
                                        <Image source={{
                                            uri: backPhoto
                                        }} alt="Alternate Text" size="xl" />

                                        <Button w='100%'
                                            style={{ color: 'black', marginTop: '2%', marginBottom: '3%' }}
                                            variant="subtle"
                                            colorScheme="secondary"
                                            onPress={this.handlerChoosebackPhoto}
                                        >
                                            Upload back image
                                        </Button>
                                    </View>
                                    <View style={styles.imageContainer, { width: '44%', margin: '3%' }} >
                                        <Image source={{
                                            uri: sidePhoto
                                        }} alt="Alternate Text" size="xl" />

                                        <Button w='100%'
                                            style={{ color: 'black', marginTop: '2%', marginBottom: '3%' }}
                                            variant="subtle"
                                            colorScheme="secondary"
                                            onPress={this.handlerChooseSidePhoto}
                                        >
                                            Upload side image
                                        </Button>
                                    </View>
                                    <View style={styles.imageContainer, { width: '44%', margin: '3%' }} >
                                        <Image source={{
                                            uri: interiorPhoto
                                        }} alt="Alternate Text" size="xl" />

                                        <Button w='100%'
                                            style={{ color: 'black', marginTop: '2%', marginBottom: '3%' }}
                                            variant="subtle"
                                            colorScheme="secondary"
                                            onPress={this.handlerChooseInteriorPhoto}
                                        >
                                            Upload interior image
                                        </Button>
                                    </View>
                                </View>
                                <View style={{ flex: 6, flexDirection: 'column' }}>
                                    <View>
                                        <Text style={styles.textfieldTitle}>
                                            Car number:
                                        </Text>
                                        <Input style={styles.textInputFeild} mb='1.5' variant="outline" placeholder="CAA-##"
                                            value={carNumber}
                                            onChangeText={(e) => { setCarNumber(e) }}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.textfieldTitle}>
                                            Brand:
                                        </Text>
                                        <Input style={styles.textInputFeild} mb='1.5' variant="outline" placeholder="Toyota"
                                            value={brand}
                                            onChangeText={(e) => { setBrand(e) }}

                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.textfieldTitle}>
                                            Model:
                                        </Text>
                                        <Input style={styles.textInputFeild} mb='1.5' variant="outline" placeholder="Prius"
                                            value={model}
                                            onChangeText={(e) => { setModel(e) }}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.textfieldTitle}>
                                            Year of manufacture:
                                        </Text>
                                        <Input style={styles.textInputFeild} mb='1.5' variant="outline" placeholder="1997/2020"
                                            value={yearOfManufacture}
                                            onChangeText={(e) => { setYearOfManufacture(e) }}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.textfieldTitle}>
                                            Milage:
                                        </Text>
                                        <Input style={styles.textInputFeild} mb='1.5' variant="outline" placeholder="121231"
                                            value={milage}
                                            onChangeText={(e) => { setMilage(e) }}
                                        />
                                    </View><View>
                                        <Text style={styles.textfieldTitle}>
                                            Engine capacity:
                                        </Text>
                                        <Input style={styles.textInputFeild} mb='1.5' variant="outline" placeholder="2000cc"
                                            value={engineCapacity}
                                            onChangeText={(e) => { setEngineCapacity(e) }}
                                        />
                                    </View><View>
                                        <Text style={styles.textfieldTitle}>
                                            Gear system:
                                        </Text>
                                        <Select mb='1.5' style={{ color: 'white' }} selectedValue={gearType} minWidth="200" accessibilityLabel="Choose Service" placeholder="Gear type" _selectedItem={{
                                            bg: "teal.600",
                                        }} mt={1} onValueChange={itemValue => setGearType(itemValue)}>
                                            <Select.Item label="None" value="None" />
                                            <Select.Item label="Manual" value="Manual" />
                                            <Select.Item label="Auto" value="Auto" />
                                            <Select.Item label="Triptonic" value="Triptonic" />
                                        </Select>
                                    </View>
                                    <View>
                                        <Text style={styles.textfieldTitle}>
                                            Fuel type:
                                        </Text>
                                        <Select mb='1.5' style={{ color: 'white' }} selectedValue={fuelType} minWidth="200" accessibilityLabel="Choose Service" placeholder="Gear type" _selectedItem={{
                                            bg: "teal.600",
                                        }} mt={1} onValueChange={itemValue => setFuelType(itemValue)}>
                                            <Select.Item label="None" value="None" />
                                            <Select.Item label="Petrol" value="Petrol" />
                                            <Select.Item label="Diesel" value="Diesel" />
                                            <Select.Item label="Hybrid" value="Hybrid" />
                                            <Select.Item label="Electric" value="Electric" />
                                        </Select>
                                    </View>
                                    <View>
                                        <Text style={styles.textfieldTitle}>
                                            Options:
                                        </Text>
                                        <Input style={styles.textInputFeild} mb='1.5' variant="outline" placeholder="reverse cam"
                                            value={options}
                                            onChangeText={(e) => { setOptions(e) }}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.textfieldTitle}>
                                            Owner contact number:
                                        </Text>
                                        <Input style={styles.textInputFeild} mb='1.5' variant="outline" placeholder="075515654"
                                            value={ownerContactNumber}
                                            onChangeText={(e) => { setOwnerContactNumber(e) }}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.textfieldTitle}>
                                            Location:
                                        </Text>
                                        <Input style={styles.textInputFeild} mb='1.5' variant="outline" placeholder="Gampaha"
                                            value={location}
                                            onChangeText={(e) => { setLocation(e) }}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.textfieldTitle}>
                                            Price:
                                        </Text>
                                        <Input style={styles.textInputFeild} mb='1.5' variant="outline" placeholder="1120 000"
                                            value={price}
                                            onChangeText={(e) => { setPrice(e) }}
                                        />
                                    </View>

                                    {/* save button -----------*/}
                                    <View>
                                        <Button w='100%'
                                            style={{ color: 'black', marginTop: '2%', marginBottom: '3%' }}
                                            variant="subtle"
                                            colorScheme="secondary"
                                            onPress={saveData}
                                        >
                                            Save
                                        </Button>
                                    </View>
                                </View>

                            </ScrollView>
                        </SafeAreaView>
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
    // scroll view
    container1: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },

    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textfieldTitle: {
        marginBottom: '2%'
    },
    textInputFeild: {
        color: 'white'
    }
});
