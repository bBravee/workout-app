import { Text, StyleSheet } from 'react-native'

function SmallTitle({children, style}) {
    return (
        <Text style={[styles.buttonText, style]}>{children}</Text>
    )
}

export default SmallTitle;

const styles = StyleSheet.create({
    buttonText: {
        fontWeight: 'bold',
        fontSize: 13,
        marginHorizontal: 12
    }
});

