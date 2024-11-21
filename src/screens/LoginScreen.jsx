import { StyleSheet, View, Text, Platform } from "react-native";
import LoginFormulario from "../components/Login";
import TextoForm from "../components/TextoFormularios";
import CirculoSuperior from "../components/CirculoSuperior";
import CirculoLogo from "../components/CirculoLogo";

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.screenContainer}>
      <CirculoSuperior />
      <View style={styles.container}>
        <View style={{ width: '80%'}}>
          <View style={styles.contentContainer}>
            <TextoForm style={styles.texto}>Bienvenido de vuelta a Presente!</TextoForm>
            <Text style={styles.instruccion}>Inicie Sesion</Text>
            <Text style={styles.instruccion}>Ingrese su mail y contraseña para ingresar</Text>
          </View>
          <View style={{ marginTop: 70}}>
            <LoginFormulario navigation={navigation} />
          </View>
          
        </View>
      </View>
      <View style={styles.logoContainer}>
        <CirculoLogo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1, 
    justifyContent: 'space-between', 
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  contentContainer: {
    alignItems: 'center',
    marginVertical: 0,
  },
  texto: {
    textAlign: 'center',
    marginBottom: 20,
  },
  instruccion: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  logoContainer: {
    alignSelf: 'flex-end', 
   
  },
});