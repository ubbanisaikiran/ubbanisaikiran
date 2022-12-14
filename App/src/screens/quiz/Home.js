import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React from 'react'
import Title from '../../components/Title'
const Home = ({navigation}) => {
  return (
    <SafeAreaView>
    <View>
      <Title />
    </View>
    <View style={styles.logocontainer}>
      <Image source={{uri:"https://ahaslides.com/wp-content/uploads/2020/05/SEO1044-02.jpg"}} 
          style={{width: 400, height: 300, resizeMode:'contain'}} />
    </View>
    <TouchableOpacity style={styles.btn_bg} onPress ={() => navigation.navigate('quizQA')} >
      <Text style={styles.startbtn}>Start</Text>
    </TouchableOpacity>
    
    <View style={[styles.logocontainer,{marginTop: 20 ,marginBottom: -20}]}>
      <Image source={{uri:"https://assets.thehansindia.com/h-upload/2022/04/26/1288966-fuel-prices.webp"}} 
          style={{width: 400, height: 250}} />
    </View>
     <TouchableOpacity style={styles.btn_bg} onPress ={() => navigation.navigate('fuel')} >
      <Text style={styles.startbtn}>Fuel Calculator</Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  logocontainer:{
    //marginHorizontal: 1,
    width: 400,
    height: 300
  },
  btn_bg:{
    backgroundColor: '#05b3fa',
    alignSelf: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: 20,
    paddingHorizontal: 30
  },
  startbtn: {
    color:'#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20
  }
})