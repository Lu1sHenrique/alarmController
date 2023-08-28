import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';

import Home from '../pages/home';

const Stack = createStackNavigator();
export default function Routes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true
            }}
        >

            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
};
