import { Text, View, TextInput, StyleSheet, ScrollView } from "react-native";
import React from "react";
import AddBtn from "../components/addItem";

const Tasks = () => {
    return(
        <View style={style.ubi}>
            <ScrollView style={style.container}>
                <TextInput placeholder="nueva tarea"></TextInput>
            </ScrollView>
            <AddBtn/>
        </View>
    )
}

const style = StyleSheet.create({
    colortext:{
        color: "white"
    },
    ubi:{
        display: "flex",
        padding: 10  
    },
    container:{
        height: 620, 
    }
})

export default Tasks;