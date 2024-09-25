import { StyleSheet, View, Text } from "react-native";
import LoginFormulario from "../components/login";
import TextoForm from "../components/textoFormularios";
import CirculoSuperior from "../components/CirculoSuperior";
import CirculoLogo from "../components/circuloLogo";

export default function LoginScreen() {
  return (
    <View style={styles.screenContainer}>
      <CirculoSuperior />
      <View style={styles.container}>
        <View style={{ width: 500 }}>
          <View style={styles.contentContainer}>
            <TextoForm style={styles.texto}>Bienvenido de vuelta a Presente!</TextoForm>
            <Text style={styles.instruccion}>Inicie Sesion</Text>
            <Text style={styles.instruccion}>Ingrese su mail y contraseña para ingresar</Text>
          </View>
          <LoginFormulario />
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
    flex: 1, // Para que el View ocupe toda la pantalla
    justifyContent: 'space-between', // Espacio entre el contenido y el logo
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1, // Ocupar el espacio disponible
  },
  contentContainer: {
    alignItems: 'center',
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
    alignSelf: 'flex-end', // Alinear el logo a la derecha
   
  },
});