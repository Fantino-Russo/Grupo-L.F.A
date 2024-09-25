import { StyleSheet, Text } from "react-native";

export default function TextoForm({ children }) {
  return <Text style={styles.texto}>{children}</Text>;
}

const styles = StyleSheet.create({
  texto: {
    color: "#3220A2",
    fontSize: 20, 
    fontFamily: "Arial",
    fontWeight: "bold" 
  },
});