import {Text, TextProps} from '@/components/Themed';
import { StyleSheet } from 'react-native';
type Props = {
    usuario: string;
};
export function Bienvenido({usuario} : Props){
    return(
        <Text style={bienvenidaStyles.titulo}>Bienvenido {usuario}</Text>
    );
}

const bienvenidaStyles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        fontFamily: "Verdana",
        fontWeight: "bold"
    },
    
});