import { TouchableOpacity, StyleSheet, Text } from "react-native";


function FilterButtons({ onPress, Title }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{Title}</Text>
        </TouchableOpacity>
    )
}

export default FilterButtons;

const styles = StyleSheet.create({
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