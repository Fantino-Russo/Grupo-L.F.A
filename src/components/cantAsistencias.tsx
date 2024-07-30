import {Text, TextProps} from '@/components/Themed';
import { StyleSheet } from 'react-native';
type Props = {
    asistencias: number;
};
export function ContadorAsistencias({asistencias} : Props){
    return(
        <Text style={asistenciaStyles.textoNormal}>El alumno asistio un total de {asistencias} veces a clase</Text>
    );
}

const asistenciaStyles = StyleSheet.create({
    textoNormal: {
        fontSize: 12,
        fontFamily: "Arial",
        color: "green"
    },
    TextoPeligro:{
        fontSize: 12,
        fontFamily: "Arial",
        color: "red"
    }
});