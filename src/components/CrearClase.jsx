import React from 'react';
import { StyleSheet, View, Modal, TouchableOpacity, TextInput, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function CrearClaseFormulario({ modalVisible, setModalVisible }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
        
        <View style={styles.modalContainer}>
           
            <View style={styles.formContainer}>
            <TouchableOpacity style={styles.cerrar}  onPress={() => setModalVisible(false)}><Ionicons name="close" size={30} color="#2C4B9A" /></TouchableOpacity> 
                <Text style={styles.Title}>Crear clase</Text>
                <Text style={styles.default}>Ingrese datos para crear su clase:</Text>
                <TextInput placeholder="Codigo" style={styles.input} />
                <TextInput placeholder="Descripcion de la materia" style={styles.input} />
                <TextInput placeholder="Curso" style={styles.input} />
                <TouchableOpacity style={styles.boton} onPress={() => setModalVisible(false)}>
                    <Text style={styles.botonText}>Crear</Text>
                </TouchableOpacity>    
            </View>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    cerrar:{
        flexDirection: 'row-reverse',
        alignSelf: 'flex-end'
    },
    boton:{
        backgroundColor: '#030392',
        width: 250,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 5,
        marginTop: 10
    },
    botonText:{
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)', // Fondo semitransparente
    },
    default:{
        fontSize: 15,
        marginBottom: 5,
        
    },
    formContainer: {
        width: 400,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    Title: {
        fontSize: 18,
        marginBottom: 15,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        
    },
    });