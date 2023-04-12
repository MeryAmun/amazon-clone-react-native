import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useState } from 'react'
import {HomeScreen, ProductScreen} from '../screens';
import { SafeAreaView, TextInput,View,StyleSheet} from 'react-native';
import { HomeHeader } from '../components';
const Stack = createNativeStackNavigator();


const HomeStack = () => {
  const [searchTerm, setSearchTerm] = useState('')
  return (

     <Stack.Navigator screenOptions={{
      header: () => <HomeHeader 
      searchTerm={searchTerm} 
      setSearchTerm={setSearchTerm}
      />
     }}>
      <Stack.Screen
        name="HomeScreen"
        options={{
          
          title: 'Home',
        }}
      >
        {() =><HomeScreen searchTerm={searchTerm}/> }
        </Stack.Screen>
      <Stack.Screen name="ProductScreen" component={ProductScreen} 
      options={{
        headerShown: false,
      }}/>
    </Stack.Navigator>
  );
};

export default HomeStack;
