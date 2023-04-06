import BodyPartItem from "../components/BodyPartItem";

import { View, FlatList, StyleSheet } from "react-native";

import { BODYPARTS } from "../data/Dataset";
import Container from "../components/Container";



function BodyPartsScreen({ navigation }) {
    // Funkcja tworzy onPressHandler który przenosi na inny ekran i zwraca komponent z wypełnionymi propsami które pobiera z itemData przekazanego przez FlatList
    function renderBoodyPartItem(itemData) {
        function itemPressHandler() { // Funkcja nawigująca
            if (itemData.item.name === 'Chest' || itemData.item.name === 'Abdominals') {
                navigation.navigate('Exercises', {
                    bodyPartName: itemData.item.name
                });
            } else {
                navigation.navigate('PartDivision', {
                    bodyPartName: itemData.item.name
                });
            }
        }

        // Usuwanie margina na dole tylko z ostatniego elementu listy
        
        const isLastItem = itemData.index === BODYPARTS.length - 1; // Sprawdza czy element jest ostatnim elementem wygernerowanym przez listę
        console.log("BPS: " + isLastItem);
        const itemStyle = isLastItem ? styles.bodyPartLastItem : styles.bodyPartItem; // Jeśli element jest ostatni to nadaje mu styl dla ostatniego elementu

        return (
            <BodyPartItem
                onPress={itemPressHandler}
                Title={itemData.item.name}
                imageUrl={itemData.item.imageUrl}
                style={itemStyle}
            />
        );
    };

    return (
        <Container>
            <FlatList
                data={BODYPARTS}
                keyExtractor={(item) => item.id}
                renderItem={renderBoodyPartItem}
                numColumns={1}
            />
        </Container>
    );
}

export default BodyPartsScreen;

const styles = StyleSheet.create({
    bodyPartItem: {
        flex: 1,
        marginBottom: 4,
        height: 200,
        elevation: 18,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    bodyPartLastItem: {
        flex: 1,
        height: 200,
        elevation: 18,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    }
})