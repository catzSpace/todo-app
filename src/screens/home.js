import React from "react";
import {  Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AddBtn from "../components/addItem";




const Home = () => {
    return(
        <View >
            
            <ScrollView style={style.scroll}>
                <View style={style.containerNote}>
                    <Text style={style.notes}>primero nota hoooo yeah</Text>
                    <Text style={style.notes}>Home</Text>
                    <Text style={style.notes}>Home</Text>
                    <Text style={style.notes}>Home</Text>
                    <Text style={style.notes}>Home</Text>
                    <Text style={style.notes}>Home</Text>
                    <Text style={style.notes}>Home</Text>
                </View>
            </ScrollView>
            <AddBtn />
        </View>
    )
}


const style = StyleSheet.create({
    notes: {
        backgroundColor: "#312E33",
        width: 370,
        height: 200,
        marginBottom: 15,
        borderRadius: 20,
        padding: 13,
        fontSize: 18,
        color: "white"
    },
    containerNote: {
        justifyContent: "center",
        alignItems: "center",

    },
    texto:{
        color: "white",
        fontSize: 15
    },
    scroll:{
        height: 640,
    }
})



export default Home;