import { StyleSheet, View, TouchableOpacity} from "react-native"

import { useState, useEffect } from "react";

import axios from "axios";
import SmallTitle from "../components/ExerciseDetail/SmallTitle";
import ExerciseList from "../components/ExercisesList/ExerciseList";

const filters = ['all', 'intermediate', 'beginner', 'expert'];

function ExercisesScreen({ route, navigation }) {
    const bodyPartName = route.params.bodyPartName;

    const [data, setData] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState(null);

    useEffect(() => {
        axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${bodyPartName}`, {
            headers: {
                'X-Api-Key': 'API_KEY'
            }
        })
            .then(response => {
                const repeated = response.data.findIndex(item => item.name === "Deadlift with Bands");

                if (repeated === -1) {
                    setData(response.data);
                } else {
                    const uniqueArray = response.data.filter((element, index, self) =>
                        index === self.findIndex((o) => o.name === element.name && o.equipment === element.equipment)
                    );

                    setData(uniqueArray);
                }
            })
            .catch(error => console.log(error));
    }, []);

    const handleFilterPress = filter => {
        setSelectedFilter(filter);
    };

    const filteredData = !selectedFilter ? data : selectedFilter === 'all' ? data : data.filter(item => item.difficulty === selectedFilter);

    return (
        <View style={styles.listContainer}>
            <View style={styles.filtersContainer}>
                {filters.map(filter => (
                    <TouchableOpacity
                        key={filter}
                        onPress={() => handleFilterPress(filter)}
                        style={[styles.button, selectedFilter === filter ? styles.buttonActive : null]}
                    >
                        <SmallTitle style={{color: 'white', marginHorizontal: null}}>{filter}</SmallTitle>
                    </TouchableOpacity>
                ))}
            </View>
            <ExerciseList navigation={navigation} items={filteredData} />
        </View>
    );
};


export default ExercisesScreen;

const styles = StyleSheet.create({
    listContainer: {
        flex: 1
    },
    filtersContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    itemContainer: {
        flex: 1,
        backgroundColor: 'red'
    },
    buttonActive: {
        backgroundColor: '#646060',
    },
    button: {
        flex: 1,
        backgroundColor: '#252424',
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
        marginVertical: 8,
    },
})


