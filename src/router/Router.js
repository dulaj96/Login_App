import React from 'react';
import { View, Text } from 'react-native';
import Login from '../screen/auth/Login';
import Register from '../screen/auth/Register';
import Forget from '../screen/auth/Forget';
import Back from '../screen/auth/Back';
import Splash from '../screen/splash/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash'>
                <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
                <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
                <Stack.Screen options={{headerShown:false}} name="Forget" component={Forget} />
                <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
                <Stack.Screen options={{headerShown:false}} name="Back" component={Back} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;