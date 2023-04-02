import { FlatList } from "react-native-gesture-handler";
import ExerciseItem from "./ExerciseItem";

function ExerciseList({ navigation, items }) {
    function renderExerciseItem({item}) {
    
        return (
            <ExerciseItem
                item={item}
                name={item.name}
                difficulty={item.difficulty}
                navigation={navigation}
            />
        );
    }

    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item.name}
            renderItem={renderExerciseItem}
        />
    )
}

export default ExerciseList;