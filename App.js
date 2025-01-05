import { Button, StyleSheet, Text, TextInput, View,ScrollView } from 'react-native';
import React, { useState } from 'react';
export default function App() {
  const [goalText, setGoalText] = useState('')
  const [goalList, setGoalList] = useState([])

  const onInputHandler = (enteredText) => { 
    setGoalText(enteredText);
  }

  const onAddGoalHandler = () => { 
  setGoalList(prevState=>[...prevState, goalText])
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText} placeholder='Your cource goal!' onChangeText={onInputHandler}/>
        <Button title='Add Goal' onPress={onAddGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {goalList.length!==0? goalList.map((goal,index) => <View key={index} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>): <Text>No goals yet!</Text>}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal:16,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  inputContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  inputText: {
    width: '70%',
    marginRight:8,
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 8,
  },
  goalsContainer: {
    flex:4
  },
  goalItem: {
    padding: 8,
    margin: 8,
    backgroundColor: '#5e0acc',
    borderRadius: 8,
  },
  goalText: {
    color: 'white',
  }
});