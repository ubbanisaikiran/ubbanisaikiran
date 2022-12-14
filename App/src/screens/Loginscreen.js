import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Loginscreen({navigation}) {
  return (
    <View>
      <View style={{ alignContent: 'center',paddingTop: 100 }}>
        <Text style={{alignSelf:'center',padding: 15, fontSize: 20 ,color:'black',fontWeight:'bold' ,paddingBottom: 35}}>Check</Text>
        <TextInput style={{borderWidth: 1,borderRadius: 20 ,padding: 10,textAlign: 'auto' ,marginHorizontal: 30, paddingLeft: 30}}
        placeholder="Enter Email" />
         <TextInput style={{borderWidth: 1,borderRadius: 20 ,padding: 10,textAlign: 'auto' ,marginHorizontal: 30, paddingLeft: 30,marginTop: 10}}
        placeholder="Enter Email" />
        <TouchableOpacity style={{backgroundColor:'skyblue',alignSelf:'center',padding :10 ,paddingHorizontal :25, borderRadius: 10,marginTop:15}} onPress={() =>navigation.navigate('quizHome')}>
          <Text style ={{color:'black',fontWeight :'bold'}}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}