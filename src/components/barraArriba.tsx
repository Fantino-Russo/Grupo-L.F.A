
import {StyleSheet} from 'react-native';
import {Text, View} from '@/components/Themed';
import Constants from 'expo-constants';

export default function BarraArriba(){
    return(
        <View style={headerStyle.Header}>
            <Text style={headerStyle.Titulo}>Presente!</Text>
        </View>
    );
}

const headerStyle = StyleSheet.create({
    Header: {
        padding: 20,
        backgroundColor: "#2C4B9A",
        alignItems: "center",
    },
    Titulo:{
        color : "#FFF",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Sans-Serif",
        
    }
}
);