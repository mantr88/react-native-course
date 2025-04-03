import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

function GoalInput({ addGoalHandler }) {
  const [goalText, setGoalText] = useState('')

  const onInputHandler = enteredText => {
    setGoalText(enteredText)
  }

  const addGoal = () => {
    if (goalText.trim().length === 0) {
      return
    }

    addGoalHandler(goalText)
    setGoalText('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholder='Your course goal!'
        onChangeText={onInputHandler}
        value={goalText}
      />
      <Button title='Add Goal' onPress={addGoal} />
    </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  inputText: {
    width: '70%',
    marginRight: 8,
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 8
  }
})
