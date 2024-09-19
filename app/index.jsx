import { StyleSheet, Image, View } from 'react-native';
import BarraArriba from '@/src/components/barraArriba';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {DrawerPersonalizado} from '@/src/components/drawerPersonalizado';
import PrincipalScreen from '@/src/screens/principal'
import LoginScreen from '@/src/components/login'
import BotonNovedades from '@/src/components/Novedades'
import Aula from '@/src/screens/Aula'
import PantallaSinLogin from '@/src/screens/PrincipalSinLogin'
const Drawer = createDrawerNavigator();

function Principal({navigation}) {
  return (
    
    <PrincipalScreen navigation={navigation}></PrincipalScreen>
  );
}

function AulaScreen() {
  return (
    <Aula></Aula>
    
  );
}
function PantallaLogOff(){
  return(
    <PantallaSinLogin></PantallaSinLogin>
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
          <Drawer.Screen
            name="Screen sin login"
            component={PantallaLogOff}
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