import { StyleSheet, Text, View } from "react-native"
import { useSelector } from "react-redux";

import { useEffect, useState } from "react";

import axios from "axios";
import ExerciseList from "../components/ExercisesList/ExerciseList";


function FavoritesScreen({ navigation }) {
    const favoriteExercisesRdx = useSelector((state) => state.favoriteExercises.names);
    const [favExercises, setFavExercises] = useState([]);

    const apiKey = 'YOUR_API_KEY_HERE';

    useEffect(() => {

        if (favoriteExercisesRdx.length === 0) {
            setFavExercises([]);
        }

        const newData = [];
        let numResponsesReceived = 0;

        for (const exerciseName of favoriteExercisesRdx) {
            axios.get(`https://api.api-ninjas.com/v1/exercises?name=${exerciseName}`, {
                headers: {
                    'X-Api-Key': apiKey
                }
            })
                .then(response => {
                    newData.push(response.data[0]);
                    numResponsesReceived++;

                    if (numResponsesReceived === favoriteExercisesRdx.length) {
                        setFavExercises(newData);
                    }
                })
                .catch(error => {
                    console.log(error)
                    if (numResponsesReceived === favoriteExercisesRdx.length) {
                        setFavExercises(newData);
                    }
                });
        }
    }, [favoriteExercisesRdx]);

    if (favoriteExercisesRdx.length === 0) {
        return (
            <View style={styles.messageContainer}>
                <Text style={styles.message}>You don't have favorite exercises yet.</Text>
            </View>
        )
    }

    return (
        <>
            <ExerciseList navigation={navigation} items={favExercises} />
        </>
    )
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    messageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    message: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})