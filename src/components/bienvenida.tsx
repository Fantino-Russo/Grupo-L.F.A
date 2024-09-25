import {Text, TextProps} from '@/components/Themed';
import { StyleSheet } from 'react-native';
export function Bienvenido(){
    return(
        <Text style={bienvenidaStyles.titulo}>Bienvenido</Text>
        
    );
}

const bienvenidaStyles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        fontFamily: "Verdana",
        fontWeight: "bold"
    },
    
});