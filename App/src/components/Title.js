import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View>
      <Text style={styles.title}>It's easy! Time Saving!! Worthy!!! </Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  title:{
    alignSelf: 'center',
    padding: 10,
    //marginTop: 10,
    fontSize: 24,
    fontWeight: '900',
    color: '#fab90b'
  }
})