
import {StyleSheet, Image, TouchableOpacity, useWindowDimensions} from 'react-native';
import {Text, View} from '@/components/Themed';

export default function BarraAbajo(){
    
    return(
        <View style={bottomStyle.Container}>
            <TouchableOpacity>
                <Image source={require('@/assets/images/Sidebar.png')} style={headerStyle.Imagen}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('@/assets/images/Sidebar.png')} style={headerStyle.Imagen}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('@/assets/images/Sidebar.png')} style={headerStyle.Imagen}/>
            </TouchableOpacity>
        </View>
    );
}   

const bottomStyle = StyleSheet.create({
    Container: {
        padding: 20,
        backgroundColor: "#2C4B9A",
        flexDirection: "row",
        justifyContent: "space-around"
        
    },
    Titulo:{
        color : "#FFF",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "Sans-Serif",
        position: "relative",

    },
    Imagen:{
        width: 30,
        height: 30,
    }
}
);