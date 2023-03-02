import { FlatList, StyleSheet, View, TouchableOpacity, Text } from "react-native"

import { useState, useEffect } from "react";

import axios from "axios";
import ExerciseItem from "../components/ExerciseItem";

const filters = ['all', 'intermediate', 'beginner', 'expert'];

function ExercisesScreen({ route, navigation }) {
    const bodyPartName = route.params.bodyPartName;

    const [data, setData] = useState([]);
    // const [filteredData, setFilteredData] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [extraData, setExtraData] = useState(null)

    useEffect(() => {
        axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${bodyPartName}`, {
            headers: {
                'X-Api-Key': 'ApiKey'
            }
        })
            .then(response => {
                const repeated = response.data.findIndex(item => item.name === "Deadlift with Bands");
                
                // Jeśli nie powtarza się 
                if (repeated === -1) {
                    setData(response.data);
                } else {
                    // Usuwanie duplikatu ćwiczenia "Deadlift with Bands"
                    const uniqueArray = response.data.filter((element, index, self) =>
                        index === self.findIndex((o) => o.name === element.name && o.equipment === element.equipment) // Duplikaty występują dwa razy i mają inne indeksy dlatego są odfiltrowywane
                    );

                    setData(uniqueArray);
                }
            })
            .catch(error => console.log(error));
        console.log('axios call');
    }, []);

    // Ustawia filtr po naciśnięciu
    const handleFilterPress = filter => {
        setSelectedFilter(filter);
        setExtraData(filter);
    };

    const filteredData = !selectedFilter ? data : selectedFilter === 'all' ? data : data.filter(item => item.difficulty === selectedFilter);

    const keyExtractor = (item) => `${item.name}_${selectedFilter}`

    // Usuwanie duplikatu ćwiczenia
    // const repeatedIdx = data.findIndex((item) => item.name === "Deadlift with Bands"); // Index powtórzonego ćwiczenia w datasecie
    // data.splice(repeatedIdx, 1);

    return (
        <View style={styles.listContainer}>
            <View style={styles.filtersContainer}>
                {filters.map(filter => (
                    <TouchableOpacity
                        key={filter}
                        title={filter}
                        onPress={() => handleFilterPress(filter)}
                        style={[styles.button, selectedFilter === filter ? styles.buttonActive : null]}
                    >
                        <Text style={styles.buttonText}>{filter}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <FlatList
                data={filteredData}
                renderItem={({ item }) =>
                    <ExerciseItem
                        name={item.name}
                        difficulty={item.difficulty}
                        onPress={() => console.log(item.name + "pressed")}
                    />}
                keyExtractor={keyExtractor}
                extraData={extraData}
            />
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
        backgroundColor: 'red'
    },
    button: {
        flex: 1,
        backgroundColor: '#2aca60',
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
        marginVertical: 8
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
})


