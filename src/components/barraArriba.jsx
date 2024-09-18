
import {StyleSheet, Image, TouchableOpacity, useWindowDimensions} from 'react-native';
import {Text, View} from '@/components/Themed';

export default function BarraArriba({navigation}){
    
    return(
        <View style={headerStyle.Header}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image source={require('@/assets/images/Sidebar.png')} style={headerStyle.Imagen}/>
            </TouchableOpacity>
            <View style={headerStyle.TituloContenedor}>
                <Text style={headerStyle.Titulo}>Presente!</Text>
                {/* <Image source={require('@/assets/images/LogoPresentee.png')} style={headerStyle.ImagenLogo}/> */}
            </View>
            
            <TouchableOpacity>
                <Image source={require('@/assets/images/Sidebar.png')} style={headerStyle.Imagen}/>
            </TouchableOpacity>
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
    TituloContenedor:{
        backgroundColor: "#2C4B9A",
        flexDirection: "row",
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
        
    },
    ImagenLogo:{
        width: 30,
        height: 50,
        bottom: 10
    }
}
);