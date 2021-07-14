import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/Home';
import ResultsShowScreen from './src/screen/ResultsShowScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Business Search" 
          component={HomeScreen} 
          options={{
            headerStyle:{
              backgroundColor: '#FF6262',
            },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen 
          name="Results Show" 
          component={ResultsShowScreen} 
          options={{
            headerStyle:{
              backgroundColor: '#FF6262',
            },
            headerTintColor: '#fff',
            headerBackTitle:''
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;