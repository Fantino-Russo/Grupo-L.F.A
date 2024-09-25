import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { auth } from '@/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginFormulario() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const manejoLogin = () => {
   
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("LOGIN correcto");
        
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Iniciar sesión" onPress={manejoLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    marginTop: 50,
  },
  input: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});