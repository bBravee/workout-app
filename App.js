import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons'

import BodyPartsScreen from './screens/BodyPartsScreen';
import ExercisesScreen from './screens/ExercisesScreen';
import ExerciseDetailsScreen from './screens/ExerciseDetailsScreen';
import PartDivisionScreen from './screens/PartDivisionScreen';
import FavoritesScreen from './screens/FavoritesScreen';

import { Provider } from 'react-redux';
import { store } from './store/redux/store';

export default function App() {
  const Stack = createStackNavigator();
  const BottomTabs = createBottomTabNavigator();

  function StackNavigator() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#191919' },
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name="BodyParts"
          component={BodyPartsScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="PartDivision"
          component={PartDivisionScreen}
        />
        <Stack.Screen name="Exercises" component={ExercisesScreen} />
        <Stack.Screen name="ExerciseDetails" component={ExerciseDetailsScreen} />
      </Stack.Navigator>
    )
  }

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <BottomTabs.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#191919' },
            headerTintColor: 'white',
            tabBarStyle: {
              backgroundColor: '#191919',
              borderTopWidth: 0
            },
            tabBarActiveTintColor: '#FF5733',
          }}
          >
            <BottomTabs.Screen
              name="BodyPartsSuperior"
              component={StackNavigator}
              options={{
                title: "Body Parts",
                tabBarLabel: "Body Parts",
                tabBarIcon: ({ color, size }) => <Ionicons name="body" size={size} color={color} />
              }}
            />
            <BottomTabs.Screen
              name="Favorites"
              component={FavoritesScreen}
              options={{
                title: "Favorite Exercises",
                tabBarLabel: 'Favorites',
                tabBarIcon: ({ color, size }) => <Ionicons name="heart" size={size} color={color} />
              }}
            />
          </BottomTabs.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}