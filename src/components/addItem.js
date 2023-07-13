import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from "react-native";
import { StyleSheet } from "react-native";

export default function AddBtn(){
    return(
        <View style={style.containerBtn}>
                <TouchableOpacity style={style.btn}>
                    <Text style={style.add}>+</Text>
                </TouchableOpacity>
        </View>
    )
};


const style = StyleSheet.create({
    btn: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: "#A589CE",
        justifyContent: "center",
        alignItems: "center"
    },
    add: {
        fontSize: 30,
        color: "#211f26"
    },
    containerBtn: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-around",
        alignItems: "center"
    }
});