import React, { useRef, useState, useLayoutEffect } from "react";
import { Image, Button, Text, ScrollView, View, StyleSheet, ImageBackground, Pressable, Animated } from "react-native";
import { Dimensions } from 'react-native';
import { Easing } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { SimpleLineIcons } from '@expo/vector-icons';

import SmallTitle from "../components/ExerciseDetail/SmallTitle";
import FavButton from "../components/FavButton";

import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

// Rozmiary okna i obrazu
const { width, height } = Dimensions.get('window');
const imageHeight = height / 1.3;
const circleWidth = (width / 3) - 20;


function ExerciseDetailsScreen({ route, navigation }) {
    const exercise = route.params.exercise;

    // Przypisanie stanu z Reduxa
    const favoriteExercises = useSelector((state) => state.favoriteExercises.names);
    const dispatch = useDispatch();

    const exerciseIsFavorite = favoriteExercises.includes(exercise.name);

    function changeFavoriteStatus() {
        console.log("clicked");
        if (exerciseIsFavorite) {
            dispatch(removeFavorite({ name: exercise.name }));
        } else {
            dispatch(addFavorite({ name: exercise.name }));
        }
    }

    // Ikona dodawania do ulubionych
    useLayoutEffect(() => {
        navigation.setOptions({
            title: exercise.name,
            headerRight: () => {
                return <FavButton
                    icon={exerciseIsFavorite ? 'heart' : 'heart-outline'} 
                    color="white" 
                    onPress={changeFavoriteStatus} />
            }
        });
    }, [exercise, navigation, changeFavoriteStatus]);



    // Animacja
    const animation = useRef(new Animated.Value(0)).current;

    const handlePressIn = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const handlePressOut = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const animatedStyle = {
        opacity: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.5],
        }),
        transform: [
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 15]
                }),
            },
        ],
    };

    // Scroll
    const scrollViewRef = useRef();

    const [viewLayout, setViewLayout] = useState(null);

    const handleButtonClick = () => {
        if (scrollViewRef.current && viewLayout) {
            scrollViewRef.current.scrollTo({
                y: viewLayout.y + imageHeight,
            });
        }
    };

    const handleViewLayout = (e) => {
        const { y } = e.nativeEvent.layout; // To to samo: const y = e.nativeEvent.layout.y;
        if (viewLayout === null) {
            setViewLayout({ y });
        }
    };

    return (
        <ScrollView onLayout={handleViewLayout} ref={scrollViewRef} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.imageContainer}>
                <ImageBackground resizeMode="cover" source={{ uri: 'https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2018&q=80' }} style={styles.imageBackground}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.imageTitle}>{exercise.name}</Text>
                        <Pressable onPress={handleButtonClick} onPressIn={handlePressIn} onPressOut={handlePressOut} style={styles.scrollButton}>
                            <Animated.View style={[styles.animatedView, animatedStyle]}>
                                <SimpleLineIcons name="arrow-down" size={24} color="white" />
                            </Animated.View>
                        </Pressable>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.textContainer}>
                <View style={styles.infoTabsContainer}>
                    <View style={styles.infoTab}>
                        <Text style={styles.infoTabText}>{exercise.muscle}</Text>
                    </View>
                    <View style={styles.infoTab}>
                        <Text style={styles.infoTabText}>{exercise.difficulty}</Text>
                    </View>
                    <View style={styles.infoTab}>
                        <Text style={styles.infoTabText}>{exercise.equipment}</Text>
                    </View>
                </View>
                <SmallTitle style={{ fontSize: 16, paddingVertical: 8, marginHorizontal: null }}>How to:</SmallTitle>
                <Text>{exercise.instructions}</Text>
            </View>
        </ScrollView>
    )
}

export default ExerciseDetailsScreen;

const styles = StyleSheet.create({
    imageContainer: {
        height: imageHeight,
        elevation: 10,
        backgroundColor: 'white',
        shadowColor: '#2e2c2c'
    },
    imageBackground: {
        flex: 1,
    },
    titleContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    imageTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
    },
    scrollButton: {
        position: 'absolute',
        bottom: '10%',
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    animatedView: {
        width: '100%',
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        margin: 24
    },
    infoTabsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoTab: {
        justifyContent: 'center',
        alignItems: 'center',
        width: circleWidth,
        height: circleWidth,
        borderWidth: 2,
        borderRadius: circleWidth / 2,
        overflow: 'hidden',
        marginBottom: '8%'
    },
    infoTabText: {
        fontWeight: 'bold'
    },
})