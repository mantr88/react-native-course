import { StyleSheet, View, FlatList, Button } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

import GoalText from './components/GoalText'
import GoalInput from './components/GoalInput'

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [goalList, setGoalList] = useState([])

  const onAddGoalHandler = goalText => {
    setGoalList(prevState => [
      ...prevState,
      { text: goalText, id: Math.random().toString() }
    ])
  }

  const onPressButtonHandler = () => {
    setModalIsVisible(true)
  }

  const onCancelButtonHandler = () => {
    setModalIsVisible(false)
  }

  const onDeleteGoalHandler = id => {
    setGoalList(prevState => {
      return prevState.filter(goal => goal.id !== id)
    })
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#a065ec'
          onPress={onPressButtonHandler}
        />
        <GoalInput
          addGoalHandler={onAddGoalHandler}
          visible={modalIsVisible}
          onCancel={onCancelButtonHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalList}
            renderItem={itemData => {
              return (
                <GoalText
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteGoalHandler={onDeleteGoalHandler}
                />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 4
  }
})
