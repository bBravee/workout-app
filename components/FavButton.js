import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function FavButton({icon, color, onPress}) {
    return (
        <Pressable style={styles.iconContainer} onPress={onPress}>
            <Ionicons name={icon} size={32} color={color} /> 
        </Pressable>
    )
}

export default FavButton;

const styles = StyleSheet.create({
    iconContainer: {
        paddingHorizontal: 12
    }
})