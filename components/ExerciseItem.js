import { View, Text, StyleSheet, Pressable } from "react-native";

import SmallTitle from "./ExerciseDetail/SmallTitle";

function ExerciseItem({ name, difficulty, onPress }) {

    return (
        <View style={styles.exerciseContainer}>
            <Pressable android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null]}
                onPress={onPress}>
                <View style={styles.innerContainer}>
                    <SmallTitle style={{ color: 'white', maxWidth: '80%'}}>{name}</SmallTitle>
                    <SmallTitle style={{ color: difficulty === 'beginner' ? 'green' : difficulty === 'intermediate' ? 'yellow' : 'red' }}>{difficulty}</SmallTitle>
                </View>
            </Pressable>
        </View>
    )
}

export default ExerciseItem;


const styles = StyleSheet.create({
    exerciseContainer: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 8,
        minHeight: 60,
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
})