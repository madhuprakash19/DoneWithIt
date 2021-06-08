import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image,TouchableOpacity, SafeAreaView, View} from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

import AppText from './app/components/AppText'

export default function App() {
  return (
    <View
      style={{
        flex:1,
        justifyContent: "center",
        alignItems: "center",  
      }}
    >
      <AppText>I love React Native!</AppText>
    </View>
  );
}

