import React from "react";
import { StyleSheet } from "react-native";
import { View, TouchableOpacity, Button, Text } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'; 


export default function Menu(props) {
    return (
            <DrawerContentScrollView {...props} >
                <View>
                    <Text  style={style.texto}>
                        Catz Space 
                    </Text>
                </View>

                <View style={style.navButtons} > 
                    <DrawerItemList  {...props} />
                </View>
                
            </DrawerContentScrollView>
        
    );
} 

const style = StyleSheet.create({
    navButtons: {
        marginTop: 80,
    },
    texto:{
        paddingLeft: 15,
        fontSize: 25,
        color: "white"
    }
})
