import React from "react";
import { Text, View, Textinput, FlatList, Image } from "react-native"


const DATA = [
    {
        src: require("./Image/Mask2.png"),
        name: "Adam",
        contact: 1238790097,

    },
    {
        src: require("./Image/Mask2.png"),
        name: "Steve",
        contact: 1788790097,

    },
    {
        src: require("./Image/Mask.png"),
        name: "Skushmelu",
        contact: 7738790097,

    },
    {
        src: require("./Image/Mask.png"),
        name: "Mack",
        contact: 7938790077,

    }
];

const Item = ({ item }) => {
    return (

        <View style={{
            backgroundColor: 'white',
            height: 140, borderRadius: 10, borderWidth: 1, flexDirection: 'row'
        }} >
            <Image source={item.src} style={{ height: 140, width: 140 }} />
            <View style={{ justifyContent: "center", alignItems: "center", marginStart: 20 }}>
                <Text style={{ fontSize: 20, color: "black" }}> {item.name}</Text>
                <Text > {item.contact}</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", marginStart: 50, flexDirection: "row" }}>
                <Image source={require("./Image/pen.png")} style={{ height: 30, width: 50 }} />
                <Image source={require("./Image/delete.png")} style={{ height: 30, width: 50 }} />
            </View>
        </View>
    )
}

const Contact
    = () => {

        return (<View>
            <View style={{ backgroundColor: "#C2E5D3", height: 80, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 20 }}> Hi! JACK
                </Text>
                <Text style={{ color: "white", fontSize: 20 }}> CONTACT BOOK
                </Text>
            </View>
            <View>
                <FlatList
                    data={DATA}
                    renderItem={Item}
                />
            </View>
        </View>
        )
    }
export default Contact