import { StyleSheet, Image } from 'react-native';
import AlumnoAdd from '@/src/Alumno/components/AlumnoAdd';
import BarraArriba from '@/src/components/barraArriba';
import { Text, View } from '@/components/Themed';
import CirculoLogo from '@/src/components/circuloLogo';
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <BarraArriba />  
      <View style={styles.contenido}>
        <Text style={styles.temporal}>Colocar Aula aca</Text>
      </View>
      <View style={styles.circulo}>
       <CirculoLogo />
       
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  contenido: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  temporal: {
    fontSize: 20,
    fontWeight: "bold",
    
  },
  circulo:{
    alignItems: "flex-end"
  },
  
  
});