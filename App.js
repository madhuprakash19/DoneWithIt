import React from 'react';
import { StyleSheet, Text, Image,TouchableOpacity, SafeAreaView, View} from 'react-native';
import Card from './app/components/Card'

export default function App() {
  return (
   <View
   style = {{
     backgroundColor : '#f8f4f4',
     padding: 20,
     paddingTop : 70,
   }}
   >
     <Card 
     title = "Red jacket for sale"
     subTitle = "$100"
     image={require("./app/assets/jacket.jpg")}
     />
   </View>
  );
}

