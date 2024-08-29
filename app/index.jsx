import { StyleSheet, Image } from 'react-native';
import BarraArriba from '@/src/components/barraArriba';
import { Text, View } from '@/components/Themed';
import CirculoLogo from '@/src/components/circuloLogo';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {DrawerPersonalizado} from '@/src/components/drawerPersonalizado';
import ClaseEjemplo from '@/src/components/claseEjemplo'
const Drawer = createDrawerNavigator();

function Principal({navigation}) {
  return (
    
    <View style={styles.container}>
      <Text style={styles.titulo}>Mis clases: </Text>
      <View style={styles.contenido}>
  
        <ClaseEjemplo style={styles.aulas} navigation={navigation}/>
      </View>
      <View style={styles.circulo}>
      <CirculoLogo />
      </View>      
   </View>
  );
}

function AulaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Aula 1</Text>
    </View>
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