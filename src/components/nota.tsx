import {Text, TextProps} from '@/components/Themed';
import { StyleSheet } from 'react-native';
type Props = {
    puntos: number;
};
export function Nota({puntos} : Props){
    return(
        <Text style={notaStyle.puntajeAlto}>Su nota es de {puntos}</Text>
        
    );
}

const notaStyle = StyleSheet.create({
    puntajeAlto:{
        fontWeight: "bold",
        fontSize: 14,
        color: "green"
    }
})