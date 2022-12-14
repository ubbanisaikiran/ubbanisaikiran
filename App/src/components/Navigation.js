import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Homescreen from '../screens/Homescreen'
import Loginscreen from '../screens/Loginscreen'
import Registerscreen from '../screens/Registerscreen'
import Home from '../screens/quiz/Home'
import Quiz from '../screens/quiz/Quiz'
import Result from '../screens/quiz/Result'
import Fuel from '../screens/petrol/Fuel'
import Fuelcost from '../screens/petrol/Fuelcost'

const stack = createNativeStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
        <stack.Navigator initialRouteName='quizHome'>
            <stack.Screen name='Login' component={Loginscreen} 
            options={{headerShown: false}} />
           
            <stack.Screen name='Home' component={Homescreen} />
           
            <stack.Screen name='Register' component={Registerscreen} />

            <stack.Screen name='quizHome' component={Home}
             options={{headerShown: false}} />

            <stack.Screen name='quizQA' component={Quiz}
            options={{headerShown: false}} />

            <stack.Screen name='quizResult' component={Result}
            options={{headerShown: false}} />
            <stack.Screen name='fuel' component={Fuel} 
            options={{headerShown: false}} /> 
            <stack.Screen name='fuelCost' component={Fuelcost} 
            options={{headerShown: false}} />
        </stack.Navigator>

    </NavigationContainer>
  )
}