import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function SeleccionarAccionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo aca */}
      <View>
        <Text style={styles.titulo}>Presente!</Text>
        <Image source={require('@/assets/images/LogoPresentex3Negro.png')} style={{ width: 250, height: 250 }} />
      </View>
      {/* Circulo inferior aca */}
      <View style={styles.circulo2}>
        <View style={styles.arreglarTransform}>
          {/* Boton para iniciar sesion */}
          <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.botonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
          {/* Boton para registrarse */}
          <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Registro')}>
            <Text style={styles.botonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#3687D2',
    width: 200,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
    margin: 20,
  },
  arreglarTransform: {
    transform: [
      { scaleX: 0.3 },
    ],
  },
  circulo2: {
    width: '29%',
    backgroundColor: '#142758',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      { scaleX: 3.5 },
    ],
    borderTopLeftRadius: 500,
    borderTopRightRadius: 500,
  },
  botonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});