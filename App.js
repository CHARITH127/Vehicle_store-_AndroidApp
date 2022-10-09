import React, { useEffect } from 'react'
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistationPage from './Screens/RegistationPage';
import SaveCarPage from './Screens/SaveCarPage';
import UserProfile from './Screens/UserProfile';
import WelcomePage from './Screens/WelcomePage';
import ShowAllCars from './Screens/ShowAllCars';
import ViewCarPage from './Screens/ViewCarPage';
import { LogBox  } from 'react-native';
LogBox.ignoreLogs(['Internal React error']);
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

export default function App() {

  const [ipAddress, setIpAddress] = React.useState("")
  const [ip4Address, setIp4Address] = React.useState("")

  useEffect(()=>{
    SplashScreen.hide();
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomePage} 
        options={{
          headerStyle:{
            backgroundColor:'#3a4042',
          },
          headerTintColor:"#fff",
        }}
        />
        <Stack.Screen name="Registration" component={RegistationPage} 
        options={{
          headerStyle:{
            backgroundColor:'#3a4042',
          },
          headerTintColor:"#fff",
        }}
        />
        <Stack.Screen name="Profile" component={UserProfile} 
        options={{
          headerStyle:{
            backgroundColor:'#3a4042',
          },
          headerTintColor:"#fff",
        }}
        />
        <Stack.Screen name="Save" component={SaveCarPage} 
        options={{
          headerStyle:{
            backgroundColor:'#3a4042',
          },
          headerTintColor:"#fff",
        }}
        />
        <Stack.Screen name="ShowAll" component={ShowAllCars} 
        options={{
          headerStyle:{
            backgroundColor:'#3a4042',
          },
          headerTintColor:"#fff",
        }}
        />
        <Stack.Screen name="ViewCar" component={ViewCarPage} 
        options={{
          headerStyle:{
            backgroundColor:'#3a4042',
          },
          headerTintColor:"#fff",
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

