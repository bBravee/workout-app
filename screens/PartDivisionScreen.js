import { useLayoutEffect } from "react";

import { BODYPARTS } from "../data/Dataset";
import BodyPartItem from "../components/BodyPartsList/BodyPartItem";
import BodyPartList from "../components/BodyPartsList/BodyPartList";

function PartDivisionScreen({ route, navigation }) {
    const bodyPartName = route.params.bodyPartName;

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

        const isLastItem = itemData.index === partDivision.division.length - 1;  

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
        <BodyPartList
            data={partDivision.division}
            render={renderBodyPartDivision}        
        />
    );
}

export default PartDivisionScreen;

