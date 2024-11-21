import { useState } from 'react';
import { db } from '@/firebase';
import { collection, query, where, getDocs, updateDoc, doc, arrayUnion } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import React from 'react';
import { StyleSheet, View, Modal, TouchableOpacity, TextInput, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function UnirseClaseFormulario({ modalVisible, setModalVisible }) {
  const [codigo, setCodigo] = useState('');

  const handleSubmit = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        // Verificar si el código está vacío
        if (!codigo) {
          alert("Por favor ingrese un código de clase.");
          return;
        }

        // Realiza una consulta para encontrar el documento que tenga el código ingresado
        const clasesRef = collection(db, "clases");
        const q = query(clasesRef, where("codigo", "==", codigo));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          alert("El código de clase no es válido o la clase no existe.");
          return;
        }

        // Obtener el primer documento que coincida con el código
        const claseDoc = querySnapshot.docs[0]; // Suponemos que solo hay una clase con ese código

       
        const claseDocRef = doc(db, "clases", claseDoc.id); 

       
        await updateDoc(claseDocRef, {
          alumnos: arrayUnion(user.uid),
        });

        alert("Te has unido a la clase exitosamente.");
        setModalVisible(false);
      } catch (error) {
        console.error("Error al unirse a la clase: ", error);
        alert("Hubo un error al unirte a la clase.");
      }
    } else {
      alert("Debes iniciar sesión para unirte a una clase.");
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.formContainer}>
          <TouchableOpacity style={styles.cerrar} onPress={() => setModalVisible(false)}>
            <Ionicons name="close" size={30} color="#2C4B9A" />
          </TouchableOpacity>
          <Text style={styles.Title}>Unirse a Clase</Text>
          <Text style={styles.default}>Ingrese el código de la clase:</Text>
          <TextInput
            placeholder="Código de la clase"
            style={styles.input}
            value={codigo}
            onChangeText={setCodigo}
          />
          <TouchableOpacity style={styles.boton} onPress={handleSubmit}>
            <Text style={styles.botonText}>Unirse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  cerrar: {
    flexDirection: 'row-reverse',
    alignSelf: 'flex-end',
  },
  boton: {
    backgroundColor: '#030392',
    width: 250,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
    marginTop: 10,
  },
  botonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  default: {
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
