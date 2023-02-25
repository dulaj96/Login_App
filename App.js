import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Router from './src/router/Router';
import Back from './src/screen/auth/Back';
import Forget from './src/screen/auth/Forget';
import Login from './src/screen/auth/Login';
import Register from './src/screen/auth/Register';
import Splash from './src/screen/splash/Splash';


const App = () => {
  return(
    <Router />
  );
}

const styles = StyleSheet.create({});

export default App;
