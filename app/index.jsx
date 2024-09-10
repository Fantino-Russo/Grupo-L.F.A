import { StyleSheet, Image } from 'react-native';
import BarraArriba from '@/src/components/barraArriba';
import { Text, View } from '@/components/Themed';
import CirculoLogo from '@/src/components/circuloLogo';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {DrawerPersonalizado} from '@/src/components/drawerPersonalizado';
import ClaseEjemplo from '@/src/components/claseEjemplo'
import PrincipalScreen from '@/src/screens/principal'
import LoginScreen from '@/src/components/login'
const Drawer = createDrawerNavigator();

function Principal({navigation}) {
  return (
    
    <PrincipalScreen navigation={navigation}></PrincipalScreen>
  );
}

function AulaScreen() {
  return (
    
      <LoginScreen></LoginScreen>
    
  );
}

export default function TabOneScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <DrawerPersonalizado {...props} />} // Usa el contenido del drawer
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
      
    </GestureHandlerRootView>
  
  );
    

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  contenido: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
  },
  temporal: {
    fontSize: 20,
    fontWeight: "bold",
    
  },
  circulo:{
    alignItems: "flex-end"
  },
  titulo:{
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C4B9A",
    marginTop: 20,
    marginHorizontal: 20,
  }
  
});