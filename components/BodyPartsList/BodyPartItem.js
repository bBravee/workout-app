import { View, Text, StyleSheet, Pressable, ImageBackground, Platform } from 'react-native';

function BodyPartItem({ onPress, Title, imageUrl, style }) {
    const imageMap = {
        chest: require('../../assets/images/BodyParts/chest.jpg'),
        back: require('../../assets/images/BodyParts/back.jpg'),
        abdominals: require('../../assets/images/BodyParts/abdominals.jpg'),
        arms: require('../../assets/images/BodyParts/arms.jpg'),
        legs: require('../../assets/images/BodyParts/legs.jpg'),
        lats: require('../../assets/images/PartsDivision/lats.jpg'),
        lower_back: require('../../assets/images/PartsDivision/lower_back.jpg'),
        middle_back: require('../../assets/images/PartsDivision/middle_back.jpg'),
        biceps: require('../../assets/images/PartsDivision/biceps.jpg'),
        triceps: require('../../assets/images/PartsDivision/triceps.jpg'),
        forearm: require('../../assets/images/PartsDivision/forearm.jpg'),
        glutes: require('../../assets/images/PartsDivision/glutes.jpg'),
        hamstrings: require('../../assets/images/PartsDivision/hamstrings.jpg'),
        quadriceps: require('../../assets/images/PartsDivision/quadriceps.jpg'),
        calves: require('../../assets/images/PartsDivision/calves.jpg'),
    };

    const image = imageMap[imageUrl];
    return (
        <ImageBackground
            source={image}
            resizeMode="cover"
            style={style}
        >
            <Pressable
                android_ripple={{ color: 'grey' }}
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressediOS : null]} 
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