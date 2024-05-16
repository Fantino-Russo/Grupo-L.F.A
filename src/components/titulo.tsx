import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
export default function Titulon() {
    return (
    <View>
        <Text style={estilosTitulo.titulo}></Text>
    </View>
)}
const estilosTitulo = StyleSheet.create({
    textoNormal: {
      fontSize: 12,
      fontFamily: "Arial",
    },
    titulo:{
        fontSize: 20,
        fontFamily: "Verdana",
        fontWeight: "bold",
        textAlign: "center"
    }
});