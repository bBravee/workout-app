import { Text } from "react-native"
import { useSelector } from "react-redux";

function FavoritesScreen() {
    const favoriteExercisesRdx = useSelector((state) => state.favoriteExercises.names);

    console.log(favoriteExercisesRdx);
    return <Text>Favorites Screen</Text>
}

export default FavoritesScreen;