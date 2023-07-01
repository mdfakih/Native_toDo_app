import React, { useState } from 'react'
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native'

const GoalInput = ({ addGoalHandler, visible, endAtGoalHandler }) => {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }

    const onAddGoal = () => {
        addGoalHandler(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/goal.png')}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your Course Goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <Button title="Add goal" onPress={onAddGoal} color='#b180f0' />
                    </View>
                    <View style={styles.btn}>
                        <Button title="Cancel" onPress={endAtGoalHandler} color='#f31282' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    btnContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    btn: {
        width: 100,
        marginHorizontal: 8
    }
})

export default GoalInput