import React from 'react'
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistationPage from './Screens/RegistationPage';
import SaveCarPage from './Screens/SaveCarPage';
import UserProfile from './Screens/UserProfile';
import WelcomePage from './Screens/WelcomePage';

const Stack = createStackNavigator();

export default function App() {

  const[ipAddress , setIpAddress] = React.useState("")
  const[ip4Address , setIp4Address] = React.useState("")

  // NetworkInfo.getIPAddress().then(ipAddress => {
  //   console.log(ipAddress);
  // });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="Registration" component={RegistationPage} />
        <Stack.Screen name="Profile" component={UserProfile} />
        <Stack.Screen name="Save" component={SaveCarPage} />
      </Stack.Navigator>
    </NavigationContainer>
    // <WelcomePage/>
    // <RegistationPage/>
    // <UserProfile/>
    // <SaveCarPage/>
  )
}
