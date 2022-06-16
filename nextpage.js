import React, { useState } from "react"
import { Text, View, TouchableOpacity, Image } from "react-native"



const Nextpage = ({ navigation, route }) => {


    let data = route.params.prop


    const [photo, setphoto] = useState(data)

    console.log(data)



    return (<View>

        <View>
            {
                route.params.prop == 1 ?


                    <Image style={{ height: 100, width: 100 }} source={require("./Image/signup.png")} />

                    :

                    <Image style={{ height: 100, width: 100 }} source={require("./Image/star.png")} />
            }
        </View>





    </View>
    )
}
export default Nextpage