import React from 'react';
import { Login, Results, ResultDetails, Home} from "./screens";
import Tabs from './navigation/tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'Login'}
        >
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Mark"
                component={Tabs}
            />
            <Stack.Screen
                name="Results"
                component={Results}
            />
            <Stack.Screen
                name="ResultDetails"
                component={ResultDetails}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;