import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import BodyPartsScreen from './screens/BodyPartsScreen';
import ExercisesScreen from './screens/ExercisesScreen';
import ExerciseDetailsScreen from './screens/ExerciseDetailsScreen';
import PartDivisionScreen from './screens/PartDivisionScreen';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#191919'},
            headerTintColor: 'white',
            // cardStyle: {backgroundColor: '#2e2c2c'}
          }}>
          <Stack.Screen 
            name="BodyParts" 
            component={BodyPartsScreen} 
           />
          <Stack.Screen name="PartDivision" component={PartDivisionScreen}/>
          <Stack.Screen name="Exercises" component={ExercisesScreen} />
          <Stack.Screen name="ExerciseDetails" component={ExerciseDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


// BodyPartsScreen - podział na partie ciała
// ExercisesScreen - ćwiczenia przypisane do danej partii ciała
// ExerciseDetailsScreen - szczegóły danego ćwiczenia


// Do zrobienia
// Zrobić sortowanie listy z ćwiczeniami względem trudności