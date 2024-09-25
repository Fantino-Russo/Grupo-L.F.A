import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

export function DrawerPersonalizado(props) {
  const { styles } = useStyle();

  return (
    <DrawerContentScrollView {...props} style={styles.flexContenedor}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>Bienvenido</Text>
      </View>
      <DrawerItem
        label="Pantalla principal"
        onPress={() => props.navigation.navigate('Pantalla principal')}
        icon={() => <Ionicons name="home" size={20} color="#2C4B9A" />}
      />
      <DrawerItem
        label="Unirte a un aula"
        onPress={() => props.setModalVisible(true)} // Se abre el modal en lugar de navegar
        icon={() => <Ionicons name="add-circle-sharp" size={20} color="#2C4B9A" />}
      />
      <View style={styles.separador}></View>
      <DrawerItem
        label="Aula Template"
        onPress={() => props.navigation.navigate('AulaScreen')}
      />
      
    </DrawerContentScrollView>
  );
}

const useStyle = () => {
  return {
    styles: StyleSheet.create({
      flexContenedor: {
        flex: 1,
        display: 'flex',
      },
      drawerHeader: {
        padding: 25,
        bottom: 5,
        justifyContent: 'center',
        backgroundColor: '#2C4B9A',
      },
      drawerHeaderText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      separador: {
        margin: 10,
        height: 2,
        backgroundColor: '#2c4b9a8a',
      },
    }),
  };
};
