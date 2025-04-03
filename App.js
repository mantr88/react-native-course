import { StyleSheet, View, FlatList } from 'react-native'
import React, { useState } from 'react'

import GoalText from './components/GoalText'
import GoalInput from './components/GoalInput'

export default function App() {
  const [goalList, setGoalList] = useState([])

  const onAddGoalHandler = goalText => {
    setGoalList(prevState => [
      ...prevState,
      { text: goalText, id: Math.random().toString() }
    ])
  }

  const onDeleteGoalHandler = id => {
    console.log('Delete')
    setGoalList(prevState => {
      return prevState.filter(goal => goal.id !== id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={onAddGoalHandler} />
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
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  goalsContainer: {
    flex: 4
  }
})
