import { FlatList, StyleSheet, View } from "react-native";

import { useLayoutEffect } from "react";

import { BODYPARTS } from "../data/Dataset";
import BodyPartItem from "../components/BodyPartItem";
import Container from "../components/Container";

function PartDivisionScreen({ route, navigation }) {
    const bodyPartName = route.params.bodyPartName;

    // Podział na szczegółowe partie wyszukane względem nazwy partii głównej
    const partDivision = BODYPARTS.find((bpItem) => {
        return bpItem.name === bodyPartName;
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            title: bodyPartName,
        });
    }, [bodyPartName, navigation])

    function renderBodyPartDivision(itemData) {
        function itemPressHandler() {
            navigation.navigate('Exercises', {
                bodyPartName: itemData.item.name
            });
        }

        // Usuwanie margina na dole tylko z ostatniego elementu listy
        const isLastItem = itemData.index === partDivision.division.length - 1; // Sprawdza czy element jest ostatnim elementem wygernerowanym przez listę
        const itemStyle = isLastItem ? styles.bodyPartLastItem : styles.bodyPartItem; // Jeśli element jest ostatni to nadaje mu styl dla ostatniego elementu

        // Jeśli jest mniej niż 3 lub dokłanie 3 elementy do wygenerowania to wysokość elementu = 200 a jeśli, w przeciwnym wypadku element ma height 300 zeby ładnie zapełniało stronę i nie było na dole pustego pola
        const itemHeight = partDivision.division.length > 3 ? 200 : 300;

        return (
            <BodyPartItem
                onPress={itemPressHandler}
                Title={itemData.item.name}
                imageUrl={itemData.item.imgUrl}
                style={{
                    flex: 1,
                    height: itemHeight,
                    marginBottom: isLastItem ? 0 : 4,
                    elevation: 18,
                    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
                }}
            />
        )
    }

    return (
        <Container>
            <FlatList
                data={partDivision.division}
                keyExtractor={(item) => item.id}
                renderItem={renderBodyPartDivision}
                numColumns={1}
            />
        </Container>
    )
}

export default PartDivisionScreen;

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