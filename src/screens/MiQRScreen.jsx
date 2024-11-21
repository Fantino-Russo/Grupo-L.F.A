import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import QRCode from 'react-native-qrcode-svg';
import { getAuth } from "firebase/auth";
export default function MiQRScreen() {
  const [qrValue, setQrValue] = useState(""); 
 
  const handleGenerarQR = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    setQrValue(user.email); 
  };

  return (
    <View style={styles.container}>
      {}
      <TouchableOpacity style={styles.boton} onPress={handleGenerarQR}>
        <Text style={styles.botonText}>Generar QR</Text>
      </TouchableOpacity>

      {}
      {qrValue ? (
        <QRCode value={qrValue} size={200} style={styles.qr} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boton: {
    backgroundColor: '#030392',
    width: 250,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  botonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  qr: {
    marginTop: 20,
  }
}); 
