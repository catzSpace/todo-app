import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Switch } from "react-native";
import 'react-native-gesture-handler';
import { MyDrawer } from "./src/components/navegation";


const App = () => {
  return(      
    
    <NavigationContainer style={style.font}>
      <MyDrawer/>
    </NavigationContainer>

  )
}

const style = StyleSheet.create({
  font: {
    fontFamily: "Roboto"
  }
})

export default App;