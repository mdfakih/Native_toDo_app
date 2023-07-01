import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const GoalItem = ({ id, text, onDeleteItem }) => {
    return (
        <View style={styles.goalItems}>
            <Pressable
                android_ripple={{ color: '#210644' }}
                onPress={onDeleteItem.bind(this, id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItems: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e08cc",
    },
    pressedItem: {
        opacity: 0.5,

    },
    goalText: {
        padding: 8,
        color: 'white'
    }
})


export default GoalItem