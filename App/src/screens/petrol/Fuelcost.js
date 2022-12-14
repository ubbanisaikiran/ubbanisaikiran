import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Fuelcost = ({navigation,route}) => {
  const {Amount} = route.params;
  const onClickHandler = () => {
    navigation.navigate('fuel')
  }
  return (
    <View style= {styles.container}>
      <ImageBackground source={{uri : 'https://www.itl.cat/pngfile/big/162-1624616_lets-go-anywhere.jpg'}} 
      style={{width:'100%',height:'100%'}}>
        <Text style={styles.txt}>      You Need Fill {"\n"}a "min. Amount "Below !</Text>
        <Text style={styles.Amt_txt}>Rs.{Math.ceil(Amount)} /-</Text>
        <View  style={{flexDirection:'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity style={styles.cal_btn} onPress={() => onClickHandler()}>
          <Text style={styles.cal_txt}>Calculate Again</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.exit_btn} onPress={() => navigation.navigate('quizHome')}>
          <Text style={styles.exit_txt}>Exit</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
      
    </View>
  )
}

export default Fuelcost

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  txt:{
    paddingTop: 115,
    fontSize: 20,
    color: 'black',
    fontWeight: '900',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent:'center',
    paddingBottom:35
  },
  cal_btn:{
    backgroundColor: '#048a10',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 15
  },
  cal_txt:{
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF'
  },
  exit_btn: {
    backgroundColor: 'red',
    alignSelf: 'flex-end',
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 20
  },
  exit_txt:{
    fontSize: 18,
    fontWeight: '900',
    color: '#FFFFFF'
  },
  Amt_txt:{
    fontSize: 40,
    alignSelf: 'center',
    padding: 150,
    paddingHorizontal: 30,
    fontWeight: '900',
    color: '#a203d1',
  }
})