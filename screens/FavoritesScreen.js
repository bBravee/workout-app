import { Button, Text } from "react-native"
import { ReactReduxContext, useSelector } from "react-redux";

import { useEffect, useState } from "react";

import axios from "axios";
import { FlatList } from "react-native-gesture-handler";
import ExerciseItem from "../components/ExercisesList/ExerciseItem";
import ExerciseList from "../components/ExercisesList/ExerciseList";


function FavoritesScreen({ navigation }) {
    const favoriteExercisesRdx = useSelector((state) => state.favoriteExercises.names);
    const [favExercises, setFavExercises] = useState([]);

    useEffect(() => {

        if (favoriteExercisesRdx.length === 0) {
            setFavExercises([]);
        }

        console.log("Favorites axios call");
        const newData = [];
        let numResponsesReceived = 0;

        for (const item of favoriteExercisesRdx) {
            axios.get(`https://api.api-ninjas.com/v1/exercises?name=${item}`, {
                headers: {
                    'X-Api-Key': 'API_KEY_HERE'
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

    return (
        <>
            <ExerciseList navigation={navigation} items={favExercises} />
        </>
    )
}

export default FavoritesScreen;