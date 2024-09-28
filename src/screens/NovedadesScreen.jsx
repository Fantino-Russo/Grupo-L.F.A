import { StyleSheet, View, Text } from "react-native";
import TextoForm from "../components/TextoFormularios";
export default function NovedadesScreen(){
    return(
        <View>
            <TextoForm>Novedades del aula:</TextoForm>
            {/* Agregar lista de asistencias la base de datos en esta pantalla*/}
        </View>
    )
}