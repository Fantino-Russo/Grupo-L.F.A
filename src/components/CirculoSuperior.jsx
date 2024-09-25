import {StyleSheet} from 'react-native';
import {Text, View} from '@/components/Themed';

import { Ionicons } from '@expo/vector-icons';
export default function CirculoSuperior(){
    return(
        <View style={CirculoStyle.Circulo}>
            <Ionicons name="home" size={30} color="#ffffff"></Ionicons>
            <Text>Atrás</Text>
        </View>
    );
}   

const CirculoStyle = StyleSheet.create({
    Circulo: {
        //Codigo para el circulo de abajo
        backgroundColor: "#2C4B9A",
        
        width: 200,
        height: 100,
        borderBottomRightRadius: 1000,
        transform: [
            {scaleX: 3.2}
        ] //No se porque esta es la unica forma que encontre para que quede un ovalo, pero gracias al random de stack overflow
    },
   
    
    
}
);