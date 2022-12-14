import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Result = ({navigation,route}) => {
  const {score,data} = route.params;

 
  //console.log(data)
  return (
    <><ScrollView>
      <View style={styles.container}>
        <Text style={styles.r_txt}>Results</Text>
        <Text style={styles.score_txt}>{score} / 10</Text>
        {data.map((item, index) => {
          return (
            <View style={styles.answers}>
              <Text style={styles.qt_txt}>Q.{decodeURIComponent(item.question)}</Text>
              <Text style={styles.ans_txt}>Ans.{decodeURIComponent(item.correct_answer)}</Text>
            </View>
          );
        })}

      </View>
    </ScrollView><TouchableOpacity style={styles.exit_btn} onPress={() => navigation.navigate('quizHome')}>
        <Text style={styles.exit_txt}>Go to Home</Text>
      </TouchableOpacity></>
  )
}

export default Result

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignSelf: 'center'
  },
  r_txt:{
    alignSelf:'center',
    fontSize: 30,
    color:'red',
    fontWeight: '900',
    marginTop: 30,
    marginBottom: 50,
    backgroundColor: '#d7dcd8',
    padding: 5,
    paddingHorizontal: 120
  },
  score_txt:{
    alignSelf:'center',
    padding: 20,
    color:'black',
    fontSize: 45,
    fontWeight:'900',
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 30
  },
  exit_btn:{
    backgroundColor: '#04adb5',
    padding:10,
    borderRadius: 15,
    marginTop: 20
  },
  exit_txt:{
    color: '#FFFFFF',
    alignSelf: 'center',
    padding: 5,
    fontSize: 18,
    fontWeight: '700',
  },
  answers:{
    flex: 1,
    backgroundColor: '#bceef1',
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 15,
    margin: 5
  },
  qt_txt:{
    fontSize: 18,
    color: 'black'
  },
  ans_txt:{
    fontSize: 18,
    color: 'green',
    padding: 10
  }
})