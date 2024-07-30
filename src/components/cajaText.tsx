import {Text, View, TextProps} from '@/components/Themed';
import { StyleSheet } from 'react-native';

export function CajaText(props: TextProps){
    return(   

        <Text {...props} style={[estilos.importante, estilos.caja]}/>
    )
};


const estilos = StyleSheet.create({
    caja:{
        height: 100,
        backgroundColor: "salmon"
    },
    importante:{
        fontWeight: "bold",
        fontSize: 13,
    },
    flexBasico:{
        display: "flex",
        flexDirection: "row",
    }
});