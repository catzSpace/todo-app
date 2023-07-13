import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/home";
import Tasks from "../screens/tasks";
import About from "../screens/about";
import Menu from "./menuComponents";




const Drawer = createDrawerNavigator();

export function MyDrawer() {
    return (

        
            <Drawer.Navigator
            drawerContent = { (props) => <Menu {...props} /> } //permite que el componente "Menu" reemplace
                                                                //el contenido del drawer.Navigator por el contenido del mismo "Menu".
                screenOptions={{
                    drawerActiveBackgroundColor: "#A589CE",
                    drawerActiveTintColor: "white",
                    headerBackgroundContainerStyle:{
                        backgroundColor: "#1F1D20",
                    },
                    headerTintColor: "white"

                    
                    
                    
                }}
            >
                <Drawer.Screen name="Home" component={Home} 
                
                    options={{
                        title: "all notes",
                        headerTitleAlign: "center",
                    
                    }}
                />
                <Drawer.Screen name="Tasks" component={Tasks} 
                    options={{
                        headerTitleAlign: "center",
                    
                    }}
                />
                <Drawer.Screen name="About" component={About}
                    options={{
                        headerTitleAlign: "center",
                        
                    }}
                />
            </Drawer.Navigator>

        
    );
}



