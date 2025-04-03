import { StyleSheet, Text, View, Pressable } from 'react-native'

function GoalText({ text, onDeleteGoalHandler, id }) {
  return (
    <Pressable onPress={onDeleteGoalHandler.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  )
}

export default GoalText

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    margin: 8,
    backgroundColor: '#5e0acc',
    borderRadius: 8
  },
  goalText: {
    color: 'white'
  }
})
