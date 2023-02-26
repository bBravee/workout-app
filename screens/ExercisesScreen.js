import { FlatList, StyleSheet, View } from "react-native"

import { useState, useEffect } from "react";

import axios from "axios";
import ExerciseItem from "../components/ExerciseItem";
import FilterButtons from "../components/FilterButtons";

function ExercisesScreen({ route, navigation }) {
    const [data, setData] = useState([]);
    const [repeated, setRepeated] = useState([]);

    // Usuwanie duplikatu ćwiczenia
    const repeatedIdx = data.findIndex((item) => item.name === "Deadlift with Bands"); // Index powtórzonego ćwiczenia w datasecie
    data.splice(repeatedIdx, 1);

    const bodyPartName = route.params.bodyPartName;

    useEffect(() => {
        axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${bodyPartName}`, {
            headers: {
                'X-Api-Key': 'api-key'
            }
        })
            .then(response => setData(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <View style={styles.listContainer}>
            <View style={styles.filtersContainer}>
                <FilterButtons Title='intermediate' />
                <FilterButtons Title='beginner' />
                <FilterButtons Title='expert' />
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <ExerciseItem
                        name={item.name}
                        type={item.type}
                        equipment={item.equipment}
                        difficulty={item.difficulty}
                        instructions={item.instructions}
                    />}
                keyExtractor={item => item.name}
            />
        </View>
    )
}

export default ExercisesScreen;

const styles = StyleSheet.create({
    listContainer: {
        flex: 1
    },
    filtersContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})


