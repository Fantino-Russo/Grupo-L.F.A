import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BarraArriba from '@/src/components/barraArriba';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DrawerPersonalizado } from '@/src/components/drawerPersonalizado';
import PrincipalScreen from '@/src/screens/principal';
import Aula from '@/src/screens/Aula';
import SeleccionarAccionScreen from '@/src/screens/PrincipalSinLogin';
import UnirseFormulario from '@/src/components/FormUnirseClase';
import LoginScreen from '@/src/screens/LoginScreen';
import RegistroScreen from '@/src/screens/RegistroScreen'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Principal({ navigation }) {
  return <PrincipalScreen navigation={navigation} />;
}

function AulaScreen() {
  return <Aula />;
}

function PantallaLogOff() {
  return <Prin />;
}

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Pantalla de Selección */}
        <Stack.Screen name="SeleccionarAccion" component={SeleccionarAccionScreen} />
        
        {/* Pantalla de Login */}
        <Stack.Screen name="Login" component={LoginScreen} />
        
        {/* Pantalla de Registro */}
        <Stack.Screen name="Registro" component={RegistroScreen} />
        {/* Pantalla principal con el Drawer */}
        <Stack.Screen name="AppDrawer">
          {() => (
            <Drawer.Navigator
              initialRouteName="Pantalla principal"
              drawerContent={(props) => (
                <DrawerPersonalizado 
                  {...props} 
                  setModalVisible={setModalVisible} 
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
              
            </Drawer.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>

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