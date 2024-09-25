import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function MiQRScreen(){
    return(
        <TouchableOpacity style={styles.boton}>
            <Text style={styles.botonText}>Generar QR</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    
    boton:{
        backgroundColor: '#030392',
        width: 250,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        
        
    },
    
    botonText:{
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
})