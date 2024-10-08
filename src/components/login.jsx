import React, { useState } from 'react';
import { View, Button, TextInput, Text, StyleSheet } from 'react-native';

// import { auth } from '@/firebase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Usare despues, el codigo es funcional, pero no tengo idea de como autenticar en cada pagina despues
  // const handleLogin = () => {
  //   auth.signInWithEmailAndPassword(email, password)
  //     .then((userCredential) => {
  //       
  //       navigation.replace('AppDrawer');
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       alert('Error al iniciar sesión');
  //     });
  // };

  // Por ahora navega a la pantalla principal
  const handleLogin = () => {
    navigation.replace('AppDrawer');
  };

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

      {/* Boton login que por ahora solo navega al Drawer */}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
    margin: 10
  },
});
