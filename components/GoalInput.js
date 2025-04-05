import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native'

function GoalInput({ addGoalHandler, visible, onCancel }) {
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
    onCancel()
  }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.inputText}
          placeholder='Your course goal!'
          onChangeText={onInputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' color='#f31282' onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' color='#b180f0' onPress={addGoal} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  inputText: {
    width: '100%',
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    borderWidth: 1,
    padding: 16
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
})
