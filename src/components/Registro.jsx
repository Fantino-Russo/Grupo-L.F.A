import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegistroFormulario({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistro = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate('AppDrawer')
       
      })
      .catch((err) => {
        setError(err.message);
      });
  }
  
    // // Función que maneja el registro
    // const handleRegister = () => {
      
      
    //   navigation.navigate('AppDrawer');
     
    // };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        {/* Boton de registro que pora hora solo navega al Drawer */}
        {error ? <Text style={styles.error}>{error}</Text> : null}
          <TouchableOpacity
          style={styles.loginButton}
          onPress={handleRegistro}
          activeOpacity={0.7}
          >
            <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
      
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 8,
      borderRadius: 4,
      margin: 10,
      
    },
    error:{
      color: "red",
    },
    loginButton: {
      backgroundColor: '#007BFF', 
      borderRadius: 5,
      height: 50,
      alignItems: 'center',
      marginVertical: 10,
    },
    
    loginButtonText: {
      padding: 15,
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });