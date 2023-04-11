import Container from "../Container";
import { FlatList } from "react-native";

function BodyPartList({data, render}) {
    return (
        <Container>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={render}
                numColumns={1}
            />
        </Container>
    );
}

export default BodyPartList;