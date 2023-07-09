import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


const Home = () => {
    return(
        <View >
            <ScrollView >
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

        </View>
    )
}


const style = StyleSheet.create({
    notes: {
        backgroundColor: "white",
        width: 320,
        height: 200,
        marginBottom: 20,
        borderRadius: 20,
        padding: 10
    },
    containerNote: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
})


export default Home;