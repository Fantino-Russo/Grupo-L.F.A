import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ClaseEjemplo({ navigation }) {  
    return (
        <TouchableOpacity onPress={() => navigation.navigate('AulaScreen')}>
            <View style={aulaStyle.contenedor}>
                <Text style={aulaStyle.titulo}>Matematicas 4° 1°</Text>
                <View style={aulaStyle.contenedorRow}>
                    <Image source={require('@/assets/images/eduardo-chaves-barboza.jpg')} style={aulaStyle.foto}/>
                    <View style={aulaStyle.datos}>
                        <Text style={aulaStyle.nombre}>Pedro Fuentes</Text>
                        <Text>Lunes y viernes de 19:30 a 20:50</Text>
                    </View> 
                </View>
                <View style={aulaStyle.separador}>
                    <View>
                        <Text style={aulaStyle.mensaje}>Mensaje importante</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const aulaStyle = StyleSheet.create({
    contenedor: {
        width: 300,
        height: 200,
        backgroundColor: "#FFEC8A",
        borderRadius: 10,
    },
    contenedorRow: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#FFEC8A",
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 10,
    },
    foto: {
        width: 60,
        height: 60,
        borderRadius: 100,
        margin: 10,
    },
    nombre: {
        marginTop: 10,
        fontSize: 16,
    },
    datos: {
        backgroundColor: "#FFEC8A",
        gap: 15,
    },
    separador: {
        height: 2,
        marginTop: 5,
        marginHorizontal: 20,
        backgroundColor: "#7d7d7daf",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    mensaje: {
        paddingHorizontal: 5,
        backgroundColor: "#FFEC8A",
    },
});