import { ActivityIndicator, Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useEffect, useState } from 'react'

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options,setOptions] = useState([]);
  const [score,setScore] = useState(0);
  const [loading,setLoading] = useState(false)
  const getQues = async () => {
    setLoading(true)
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const response = await fetch(url);
    const data = await response.json();
    //console.log('response',JSON.stringify(data));
    setQuestions(data.results);
    setOptions(generateOptions(data.results[0]));
    setLoading(false)
  }
  const shuffleArray = (array) => {
    for(let i = array.length - 1;i>0;i--){
      const j = Math.floor(Math.random() * (i+1));
      [array[i],array[j]] = [array[j],array[i]];
    }
  }
  const generateOptions = (_question) => {
    const options =[..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);
    return options;
  }
  const onclickNext = () => {
    setQues(ques + 1);
    setOptions(generateOptions(questions[ques+1]))
  }
  const validateOption = (_option) => {
   // const ans = _option;
    if (_option === questions[ques].correct_answer){
      setScore(score+1);
    }
    if(ques!==9){
     setQues(ques + 1);
    setOptions(generateOptions(questions[ques+1]))
    //console.log(score)
    }
    if(ques === 9){
      Alert.alert('Congrats! you completed the Quiz','Click on Show Results for Score')
    }
  }
  const showResult = () => {
    { ques === 9 ?
    navigation.navigate('quizResult',{
      score: score,
      data: questions
    }) : Alert.alert('Task In complete','Answer the 10 too')}
  }
  useEffect(() => {
    getQues();
  }, []);
  return (
    <SafeAreaView style={styles.container} >
      {loading ? <ActivityIndicator size={'large'} style={{alignSelf: 'center',alignItems: 'center'}}></ActivityIndicator> 
      :<>
      {questions && (
        <>
          <View style={styles.questionContainer}>
            <Text style={styles.qt_txt}>Q.{decodeURIComponent(questions[ques].question)}</Text>
          </View>
          <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.option} onPress={() => validateOption(options[0])}>
              <Text style={styles.option_txt}>{decodeURIComponent(options[0])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => validateOption(options[1])}>
              <Text style={styles.option_txt}>{decodeURIComponent(options[1])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => validateOption(options[2])}>
              <Text style={styles.option_txt}>{decodeURIComponent(options[2])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => validateOption(options[3])}>
              <Text style={styles.option_txt}>{decodeURIComponent(options[3])}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom_btns}>
            {ques !== 9 && <>
            <TouchableOpacity style={styles.skip_btn} onPress={() => navigation.navigate('quizHome')}>
              <Text style={styles.btn_txt}>Quit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.next_btn} onPress={() => onclickNext()}>
                <Text style={styles.btn_txt}>Skip</Text>
              </TouchableOpacity><TouchableOpacity></TouchableOpacity>
              </>}
              {ques === 9 && 
              <>
              <TouchableOpacity style={styles.skip_btn} onPress={() => showResult()}>
              <Text style={styles.btn_txt}>Show Results</Text>
            </TouchableOpacity>
              </>
              }
          </View>
        </>)}
        </>
        }
    </SafeAreaView>
  )
}

export default Quiz

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  questionContainer: {
    // margin: 5,
    marginTop: 25,
    marginBottom: 30
    // flex: 0.3
  },
  qt_txt: {
    color: 'black',
    fontSize: 25,
    fontWeight: '700',
    marginHorizontal: 5
   // alignSelf: 'center'
  },
  optionContainer: {
    //flex: 0.5
  },
  skip_btn: {
    backgroundColor: '#6855c6',
    padding: 10,
    borderRadius: 15,
    alignSelf: 'flex-start',
    margin: 10,
    //marginLeft: 10,
    paddingHorizontal: 30
  },
  next_btn: {
    backgroundColor: '#136f06',
    padding: 10,
    borderRadius: 15,
    alignSelf: 'flex-end',
    margin: 10,
    marginLeft: 130,
    paddingHorizontal: 30
  },
  btn_txt: {
    color: '#FFFFFF',
    padding: 5,
    fontSize: 15,
    fontWeight: '900'
  },
  bottom_btns: {
    // flex: 0.2,
    flexDirection: 'row',
    //alignContent: 'space-between',
    justifyContent: 'space-between',
    marginTop: 80
  },
  option: {
    backgroundColor: '#04669a',
    padding: 15,
    margin: 5,
    borderRadius: 15,
  },
  option_txt: {
    color: '#FFFFFF',
    fontSize: 18
  }

})