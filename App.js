import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './home'
import Contact from './contact'
const Stack = createNativeStackNavigator()
const App = () =>
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='home' component={HomeScreen} />
      <Stack.Screen name='Contacts' component={Contact} />
    </Stack.Navigator>
  </NavigationContainer>
export default App