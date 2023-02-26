import { View, Text, StyleSheet, Pressable } from "react-native";

import { useState, useEffect } from "react";
import FilterButtons from "./FilterButtons";

function ExerciseItem({ name, type, equipment, difficulty, instructions, onPress }) {

    return (
        <View style={styles.exerciseContainer}>
            <Pressable android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null]}
                onPress={onPress}>
                <View style={styles.innerContainer}>
                    <Text style={styles.exerciseText}> {name} </Text>
                    {/* <Text>Type: {type} </Text> */}
                    {/* <Text>Equipment: {equipment} </Text> */}
                    <Text style={[styles.exerciseText, { color: difficulty === 'beginner' ? 'green' : difficulty === 'intermediate' ? 'yellow' : 'red' }]}> {difficulty} </Text>
                    {/* <Text>Instructions: {instructions} </Text> */}
                </View>
            </Pressable>
        </View>
    )
}

export default ExerciseItem;


const styles = StyleSheet.create({
    exerciseContainer: {
        flex: 1,
        borderRadius: 8,
        height: 60,
        // paddingVertical: 18,
        // paddingHorizontal: 8,
        margin: 18,
        elevation: 5,
        shadowColor: 'black',
        backgroundColor: '#363434',
    },
    button: {
        flex: 1,
    },
    buttonPressed: { // Naciśnięcie pod iOSa
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    exerciseText: {
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 12
    }
})