import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BodyPartsScreen from './screens/BodyPartsScreen';
import ExercisesScreen from './screens/ExercisesScreen';
import ExerciseDetailsScreen from './screens/ExerciseDetailsScreen';
import PartDivisionScreen from './screens/PartDivisionScreen';
import FavoritesScreen from './screens/FavoritesScreen';

import { Provider } from 'react-redux';
import { store } from './store/redux/store';

export default function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  function DrawerNavigator() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="BodyParts" component={BodyPartsScreen} />
        <Drawer.Screen name="Favorites" component={FavoritesScreen} />
      </Drawer.Navigator>
    )
  }

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#191919' },
              headerTintColor: 'white',
              // cardStyle: {backgroundColor: '#2e2c2c'}
            }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
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
        </NavigationContainer>
      </Provider>
    </>
  );
}


// BodyPartsScreen - podział na partie ciała
// ExercisesScreen - ćwiczenia przypisane do danej partii ciała
// ExerciseDetailsScreen - szczegóły danego ćwiczenia


// Do zrobienia
// Zrobić sortowanie listy z ćwiczeniami względem trudności