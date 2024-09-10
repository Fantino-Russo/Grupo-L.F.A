import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text, View} from '@/components/Themed';
import Constants from 'expo-constants';

export default function CirculoLogo(){
    return(
        <View style={CirculoStyle.Circulo}>
            <Image source={require('@/assets/images/LogoPresentex3Blanco.png')} style={CirculoStyle.Imagen}/>
        </View>
    );
}   

const CirculoStyle = StyleSheet.create({
    Circulo: {
        //Codigo para el circulo de abajo
        backgroundColor: "#253d7b",
        
        width: 200,
        height: 200,
        borderTopLeftRadius: 1000,
        transform: [
            {scaleX: 3.5}
        ] //No se porque esta es la unica forma que encontre para que quede un ovalo, pero gracias al random de stack overflow
    },
    Imagen:{
        width: 170,
        height: 170,
        position: 'absolute',  // Use absolute positioning
        top: 35,             // Position the image at the bottom
        right: 15,  
        transform: [
            {scaleX: .3}
        ]
    }
    
    
}
);