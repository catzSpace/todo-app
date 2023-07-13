import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Switch } from "react-native";
import 'react-native-gesture-handler';
import { MyDrawer } from "./src/components/navegation";

const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#1F1D20',
    card: '#1F1D20',
    text: 'white',
    border: '#1F1D20',
    notification: 'white',
  },
};

const App = () => {
  return(      
      <NavigationContainer theme={MyTheme} >
        <MyDrawer/>
      </NavigationContainer>
  )
}



export default App;