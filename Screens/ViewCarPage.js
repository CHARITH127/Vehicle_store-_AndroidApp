import React, { useId, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Alert } from "react-native";
import { NativeBaseProvider, Button, Input, Icon, Ionicons, Image, Select } from "native-base";
import image from "../asessts/HomeImage/carImage2.jpg"
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function ViewCarPage({ route, navigation }) {

    const [userId, setUserId] = useState(route.params.item.user_id)
    const [frontPhoto, setFrontPhoto] = useState(route.params.item.front_image);
    const [backPhoto, setBackPhoto] = useState(route.params.item.back_image);
    const [sidePhoto, setSidePhoto] = useState(route.params.item.side_image);
    const [interiorPhoto, setInteriorPhoto] = useState(route.params.item.interior_image);
    const [carNumber, setCarNumber] = useState(route.params.item.car_id);
    const [brand, setBrand] = useState(route.params.item.brand);
    const [model, setModel] = useState(route.params.item.model);
    const [yearOfManufacture, setYearOfManufacture] = useState(route.params.item.year_of_manufactures);
    const [milage, setMilage] = useState(route.params.item.milage);
    const [engineCapacity, setEngineCapacity] = useState(route.params.item.engine);
    const [gearType, setGearType] = useState(route.params.item.gear_type);
    const [fuelType, setFuelType] = useState(route.params.item.fuel_type);
    const [options, setOptions] = useState(route.params.item.options);
    const [ownerContactNumber, setOwnerContactNumber] = useState(route.params.item.contact_number);
    const [location, setLocation] = useState(route.params.item.location);
    const [price, setPrice] = useState(route.params.item.price);

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

    updateData = async () => {
        await fetch('http://192.168.123.77:3000/cars', {
            method: 'PUT',
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
                fual_type: fuelType,
                price_: price

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.message == "successfully updated") {
                    Alert.alert("Done", "successfully updated")
                } else {
                    Alert.alert("Error", "Faild to save the car")
                }

            })
            .catch((err) => { Alert.alert("Failt to save", json.message) })
    }

    deleteData =  () => {

        Alert.alert(
            "warning",
            "Are you sure to delete this recode!",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                         fetch('http://192.168.123.77:3000/cars', {
                            method: 'DELETE',
                            body: JSON.stringify({
                                car_ID: carNumber,
                            }),
                            headers: {
                                'Content-type': 'application/json; charset=UTF-8',
                            },
                        })
                            .then((response) => response.json())
                            .then((json) => {
                                if (json.message == "successfully deleted") {
                                    Alert.alert("Done", "successfully deleted")
                                } else {
                                    Alert.alert("Error", "Faild to delete the car")
                                }

                            })
                            .catch((err) => { Alert.alert("Failt to save", json.message) })
                    }
                }
            ]
        );
    }

    return (
        <NativeBaseProvider>
            <ImageBackground source={image} resizeMode='cover' style={styles.backgroundImage} >
                <View style={styles.container}>
                    <View style={[{ flex: 1 }]}>
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
                                        <Input isDisabled="true" style={styles.textInputFeild} mb='1.5' variant="outline" placeholder="CAA-##"
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
                                        <Input style={styles.textInputFeild} mb='1.5' variant="outline" placeholder="075515654"
                                            value={price.toString()}
                                            onChangeText={(e) => { setPrice(e) }}
                                        />
                                    </View>

                                    {/* save button -----------*/}
                                    <View>
                                        <Button w='100%'
                                            style={{ color: 'black', marginTop: '2%', marginBottom: '3%' }}
                                            variant="subtle"
                                            colorScheme="secondary"
                                            onPress={updateData}
                                        >
                                            Update the car
                                        </Button>
                                        <Button w='100%'
                                            style={{ color: 'black', borderColor: 'red', marginTop: '2%', marginBottom: '3%' }}
                                            variant="outline"
                                            colorScheme="danger"
                                            onPress={deleteData}
                                        >
                                            Delete the car
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