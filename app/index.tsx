import { StyleSheet } from 'react-native';

import BarraArriba from '@/src/components/barraArriba';
import { Text, View } from '@/components/Themed';
import { Nota } from '@/src/components/nota';
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <BarraArriba />  
      <View style={styles.contenido}>
        <Text style={styles.temporal}>Colocar Aula aca</Text>
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
});