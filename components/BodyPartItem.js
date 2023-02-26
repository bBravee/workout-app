import { View, Text, StyleSheet, Pressable, ImageBackground, Platform } from 'react-native';

import { GlobalStyles } from '../constants/styles';


function BodyPartItem({ onPress, Title, imageUrl, style }) {
    return (
            <ImageBackground
                source={{ uri: imageUrl }}
                resizeMode="cover"
                style={style}
            >
                <Pressable
                    android_ripple={{ color: 'grey' }}
                    style={({ pressed }) => [styles.button, pressed ? styles.buttonPressediOS : null]} // Ripple dla iOSa
                    onPress={onPress}
                >
                    <View style={styles.bodyPartElement}>
                        <Text style={styles.bodyPartText}>{Title}</Text>
                    </View>
                </Pressable>
            </ImageBackground>
    )
}

export default BodyPartItem;

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
    },
    button: {
        flex: 1,
        borderRadius: 10
    },
    buttonPressediOS: {
        opacity: 0.5
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    bodyPartElement: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    bodyPartText: {
        color: 'white',
        fontSize: 24,
        marginLeft: 64
    },
})