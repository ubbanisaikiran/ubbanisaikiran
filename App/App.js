import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './screens/Homescreen';
import Profile from './screens/Profile';
import Usage from './screens/usage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
      }}
       >
        <Tab.Screen name='Home' component={Homescreen} 
        
        />
        <Tab.Screen name='Profile' component={Profile} />
        <Tab.Screen name='Usage' component={Usage} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}