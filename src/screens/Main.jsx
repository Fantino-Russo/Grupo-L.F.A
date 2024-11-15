import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import BarraArriba from '@/src/components/BarraArriba';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DrawerPersonalizado } from '@/src/components/DrawerPersonalizado';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';
import PrincipalScreen from '@/src/screens/Principal';
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


export default function Main() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Observador de cambios en el estado de autenticacion
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user)
      setIsAuthenticated(!!user); // true si el usuario está autenticado
    });

    return unsubscribe; // Limpia el observador al desmontar el componente
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          // si no esta autenticado borra el direcciona a al pantalla principal sin sesion (la del login y registro)
          <>
            <Stack.Screen name="SeleccionarAccion" component={SeleccionarAccionScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registro" component={RegistroScreen} />
          </>
        ) : (
          // al estar autenticado, muestra la pagina principal
          <Stack.Screen name="AppDrawer">
            {() => (
              <Drawer.Navigator
                initialRouteName="Pantalla principal"
                drawerContent={(props) => (
                  <DrawerPersonalizado {...props} setModalVisible={setModalVisible} />
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
        )}
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
