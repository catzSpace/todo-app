import React from "react";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import Home from "../screens/home";
import Tasks from "../screens/tasks";
import About from "../screens/about";
import { Switch } from "react-native-gesture-handler";
import { Text, StyleSheet } from "react-native";


const Drawer = createDrawerNavigator();

export function MyDrawer() {
    return (

        
            <Drawer.Navigator
                drawerContent = { (props) => <Menu {...props} /> } //permite que el componente "Menu" reemplace
                //el contenido del drawer.Navigator por el contenido del mismo "Menu".
            >
                
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Tasks" component={Tasks} />
                <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>

        
    );
}

const Menu = ({ nav }) =>{
    return(
        <DrawerContentScrollView style={style.contenedor}>
            <Text style={style.texto}>Catz Space</Text>
            <Switch/>
        </DrawerContentScrollView>
    )
}

const style = StyleSheet.create({
    contenedor: {
        padding: 10
    },
    texto: {
        fontSize: 25
    }
})


