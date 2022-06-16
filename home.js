import React from "react";
import { Text, View, TextInput, Button, TouchableOpacity, Image } from "react-native"

const HomeScreen = ({ navigation }) => {

    return (<View>
        <View style={{ backgroundColor: "#C2E5D3", height: 80 }}>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 30 }}>
            <TouchableOpacity>
                <Image source={require("./Image/vc.png")} style={{ height: 200, width: 200, }} />
            </TouchableOpacity>
        </View >
        <View style={{ marginTop: 10, marginStart: 50 }}>
            <Text style={{ fontSize: 20, color: "black", }}>Name</Text>
            <TextInput style={{
                borderWidth: 1, width: 300, borderRadius: 10
            }}
                placeholder="Enter Name" />

        </View>
        <View style={{ marginTop: 20, marginStart: 50 }}>
            <Text style={{ fontSize: 20, color: "black", }}>Phone No.</Text>
            <TextInput style={{
                borderWidth: 1, width: 300, borderRadius: 10
            }} keyboardType='numeric'
                maxLength={10}
                placeholder="Enter Phone Number" />

        </View>
        <View style={{ marginTop: 50, justifyContent: "center", alignItems: "center", }}>
            <Button title="Add To Phonebook" onPress={() => { navigation.navigate('Contacts') }} />
        </View>




    </View >
    )
}
export default HomeScreen