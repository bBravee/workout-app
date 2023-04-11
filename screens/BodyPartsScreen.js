import BodyPartItem from "../components/BodyPartsList/BodyPartItem";

import { StyleSheet } from "react-native";

import { BODYPARTS } from "../data/Dataset";
import BodyPartList from "../components/BodyPartsList/BodyPartList";


function BodyPartsScreen({ navigation }) {
    function renderBoodyPartItem(itemData) {
        function itemPressHandler() { 
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
        
        const isLastItem = itemData.index === BODYPARTS.length - 1; 
        const itemStyle = isLastItem ? styles.bodyPartLastItem : styles.bodyPartItem; 

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
        <BodyPartList
            data={BODYPARTS}
            render={renderBoodyPartItem}
        />
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