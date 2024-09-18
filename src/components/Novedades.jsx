import { StyleSheet, Image, Text, View} from "react-native";

export default function BotonNovedades (){ 
    return(
        <View style={styles.contenedor}>
            
            {/* <Image> </Image> */}
            <Text style={styles.Texto}> Novedades </Text>
        </View>

    )

}
const styles = StyleSheet.create({
    Texto:{
        fontFamily: "Arial", 
        fontSize: 10, 
        fontWeight: "bold",
        
    }, 
    contenedor: {
        backgroundColor: "#253d7b",

    }

});
