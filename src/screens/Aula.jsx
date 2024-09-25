import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, Text, StyleSheet } from 'react-native';
import AsistenciasScreen from '@/src/screens/AsistenciasScreen'
import NovedadesScreen from '@/src/screens/NovedadesScreen'
import MiQRScreen from '@/src/screens/MiQRScreen'
// Crear un Tab Navigator
const Tab = createBottomTabNavigator();


function Novedades() {
  return (
    <View style={styles.screenContainer}>
      <NovedadesScreen></NovedadesScreen>
    </View>
  );
}

function Asistencias() {
  return (
    <View style={styles.screenContainer}>
      <AsistenciasScreen></AsistenciasScreen>
    </View>
  );
}

function MiQR() {
  return (
    <View style={styles.QRContainer}>
      <MiQRScreen></MiQRScreen>
    </View>
  );
}

export default function Aula() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#142758', height: 75 }, // Estilo del fondo de las tabs
        tabBarActiveTintColor: '#FFF',  // Color del ícono activo
        tabBarInactiveTintColor: '#000000', // Color del ícono inactivo
        tabBarLabelStyle: { display: 'none' },
      }}
    >
      <Tab.Screen
        name="Novedades de la clase"
        component={Novedades}
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
        name="Mis asistencias"
        component={Asistencias}
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
        name="Mi QR"
        component={MiQR}
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
    // justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  QRContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
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