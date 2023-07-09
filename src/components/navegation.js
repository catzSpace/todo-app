import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/home";
import Tasks from "../screens/tasks";
import About from "../screens/about";
import {  StyleSheet } from "react-native";
import Menu from "./menuComponents";




const Drawer = createDrawerNavigator();

export function MyDrawer() {
    return (

        
            <Drawer.Navigator
            drawerContent = { (props) => <Menu {...props} /> } //permite que el componente "Menu" reemplace
                //el contenido del drawer.Navigator por el contenido del mismo "Menu".
                screenOptions={{
                    drawerActiveBackgroundColor: "#FFF5D8",
                    drawerActiveTintColor: "#FF9983"
                }}
            >
                
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Tasks" component={Tasks} />
                <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>

        
    );
}



const style = StyleSheet.create({
    contenedor: {
        padding: 10
    },
    texto: {
        fontSize: 25
    }
})


