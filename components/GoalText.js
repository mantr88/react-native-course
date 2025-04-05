import { StyleSheet, Text, View, Pressable } from 'react-native'

function GoalText({ text, onDeleteGoalHandler, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={onDeleteGoalHandler.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem} // This is for iOS ripple effect
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalText

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: '#5e0acc',
    borderRadius: 8
  },
  goalText: {
    color: 'white',
    padding: 8
  }
})
