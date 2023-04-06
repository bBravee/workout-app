import { View, StyleSheet } from "react-native";

function Container({children}) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default Container;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919'
    }
})