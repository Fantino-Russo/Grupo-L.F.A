import { StyleSheet, Image } from 'react-native';
import BarraArriba from '@/src/components/BarraArriba';
import { Text, View } from '@/components/Themed';
import CirculoLogo from '@/src/components/CirculoLogo';
import ClaseEjemplo from '@/src/components/ClaseEjemplo'
export default function PrincipalScreen({navigation}) {
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