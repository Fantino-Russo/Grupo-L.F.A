import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, Text, StyleSheet } from 'react-native';

// Crear un Tab Navigator
const Tab = createBottomTabNavigator();

// Componente de ejemplo para cada tab
function Screen1() {
  return (
    <View style={styles.screenContainer}>
      <Text>Página 1</Text>
    </View>
  );
}

function Screen2() {
  return (
    <View style={styles.screenContainer}>
      <Text>Página 2</Text>
    </View>
  );
}

function Screen3() {
  return (
    <View style={styles.screenContainer}>
      <Text>Página 3</Text>
    </View>
  );
}

export default function Aula() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#142758', height: 75 }, // Estilo del fondo de las tabs
        tabBarActiveTintColor: '#FFF',  // Color del ícono activo
        tabBarInactiveTintColor: '#0d002d', // Color del ícono inactivo
        tabBarLabelStyle: { display: 'none' }, 
      }}
    >
      <Tab.Screen
        name="Tab1"
        component={Screen1}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('@/assets/images/Novedades.png')}
                style={[{height: 35, width: 35}, { tintColor: color }]}
              />
              <Text style={[styles.label, { color }]}>Novedades</Text>
            </View>
          ),
        }}
      />
      {/* ASISTENCIAS ACA */}
      <Tab.Screen
        name="Tab2"
        component={Screen2}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('@/assets/images/mano.png')}
                style={[{height: 40, width: 40}, { tintColor: color }]}
              />
              <Text style={[styles.label, { color }]}>Asistencias</Text>
            </View>
          ),
        }}
      />
      {/* QR ACA */}
      <Tab.Screen
        name="Tab3"
        component={Screen3}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('@/assets/images/qr.png')}
                style={[{height: 35, width: 35}, { tintColor: color }]}
              />
              <Text style={[styles.label, { color }]}>QR</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10, // Espacio vertical adicional
    paddingHorizontal: 20, // Espacio horizontal adicional
  },
  
  label: {
    fontSize: 14, // Tamaño del texto
    marginTop: 4, // Espacio entre el ícono y el texto
    paddingHorizontal: 5
  },
});