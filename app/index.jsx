import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BarraArriba from '@/src/components/barraArriba';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DrawerPersonalizado } from '@/src/components/drawerPersonalizado';
import PrincipalScreen from '@/src/screens/principal';
import Aula from '@/src/screens/Aula';
import PantallaSinLogin from '@/src/screens/PrincipalSinLogin';
import UnirseFormulario from '@/src/components/FormUnirseClase';
import LoginScreen from '@/src/screens/LoginScreen';
const Drawer = createDrawerNavigator();

function Principal({ navigation }) {
  return <PrincipalScreen navigation={navigation} />;
}

function AulaScreen() {
  return <Aula />;
}

function PantallaLogOff() {
  return <PantallaSinLogin />;
}

export default function TabOneScreen() {
  // Estado para controlar la visibilidad del modal
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => (
          <DrawerPersonalizado 
            {...props} 
            setModalVisible={setModalVisible} // Pasar la función para abrir/cerrar el modal
          />
        )}
      >
        <Drawer.Screen
          name="Pantalla principal"
          component={Principal}
          options={({ navigation }) => ({
            header: () => <BarraArriba navigation={navigation} />,
          })}
        />
        <Drawer.Screen
          name="AulaScreen"
          component={AulaScreen}
          options={({ navigation }) => ({
            header: () => <BarraArriba navigation={navigation} />,
          })}
        />
        <Drawer.Screen
          name="Screen sin login"
          component={PantallaLogOff}
          options={({ navigation }) => ({
            header: () => <BarraArriba navigation={navigation} />,
          })}
        />
      </Drawer.Navigator>

      {/* Componente del Modal, con su visibilidad controlada */}
      <UnirseFormulario modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
