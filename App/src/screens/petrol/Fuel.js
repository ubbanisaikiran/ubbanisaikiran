import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

const Fuel = ({navigation}) => {
  const [mileage,setMileage] = useState(0);
  const [km,setKm] = useState(0);
  const [price,setPrice] = useState(0);
  let Amount;

  const onclickHandler = ({km,mileage,price}) => {
    Amount = km/mileage*price;
    navigation.navigate('fuelCost',{
      Amount: Amount
    })

  }
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri : 'https://pbs.twimg.com/media/EpYKGrlVQAE6aqV.jpg:large'}} style={{width: '100%',height: '100%'}}>
      <Text style={styles.fuel_txt}>Calculate Fuel For a Trip</Text>
      <TextInput placeholder='enter the Kilo mts '
      value={km}
      onChangeText={text => setKm(text)}
      style={styles.input}
      placeholderTextColor='#FFFFFF'
       />
      <TextInput placeholder='Enter the mileage '
      value={mileage} 
      onChangeText={text => setMileage(text)}
      style={styles.input}
      placeholderTextColor='#FFFFFF' />
      <TextInput placeholder='Enter Amt per litre ' 
      value={price} 
      onChangeText ={text => setPrice(text)}
      style={styles.input}
      placeholderTextColor='#FFFFFF' />
      <TouchableOpacity onPress={() => onclickHandler({km,mileage,price})} style={styles.Amt_btn} >
        <Text style={styles.btn_txt}>Get Amount</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default Fuel

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  fuel_txt:{
 alignSelf: 'center',
 fontSize: 25,
 color: 'green',
 fontWeight: '900',
 backgroundColor: '#d7dcd8',
 paddingHorizontal: 30,
 padding: 10,
 borderRadius: 15,
 marginBottom: 70,
 marginTop: 90
  },
  input:{
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 20,
    margin: 5,
    textAlign: 'center',
    paddingHorizontal: 60,
    fontSize: 20,
    fontWeight: '800',
  },
  Amt_btn:{
    backgroundColor: '#f11313',
    padding: 15,
    marginTop: 120,
    borderRadius: 20,
    marginHorizontal: 15
  },
  btn_txt:{
    fontSize: 20,
    fontWeight: '700',
    alignSelf:'center',
    color: '#FFFFFF',
  }
}) 