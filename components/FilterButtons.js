import { TouchableOpacity, StyleSheet, Text } from "react-native";


function FilterButtons({ onPress, Title, active }) {
    return (
        <TouchableOpacity onPress={() => onPress(Title)} style={styles.button}>
            <Text style={styles.buttonText}>{Title}</Text>
        </TouchableOpacity>
    )
}

export default FilterButtons;

const styles = StyleSheet.create({
  
})