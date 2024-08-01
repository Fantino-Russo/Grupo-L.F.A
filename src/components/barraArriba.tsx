
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text, View} from '@/components/Themed';
import Constants from 'expo-constants';

export default function BarraArriba(){
    return(
        <View style={headerStyle.Header}>
            <TouchableOpacity>
                <Image source={require('@/assets/images/Sidebar.png')} style={headerStyle.Imagen}/>
            </TouchableOpacity>
            
            <Text style={headerStyle.Titulo}>Presente!</Text>
            <View/>
        </View>
    );
}   

const headerStyle = StyleSheet.create({
    Header: {
        padding: 20,
        backgroundColor: "#2C4B9A",
        flexDirection: "row",
        justifyContent: "space-between"
        
    },
    Titulo:{
        color : "#FFF",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Sans-Serif",
        position: "relative",
        left: "-50%"

    },
    Imagen:{
        width: 30,
        height: 30,
    }
}
);