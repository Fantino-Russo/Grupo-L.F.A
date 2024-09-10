import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
export function DrawerPersonalizado(props) {
    const {styles} = useStyle();
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
        <View style={styles.separador}></View>
        <DrawerItem
            label="Login test"
            onPress={() => props.navigation.navigate('AulaScreen')}
        />
        
        </DrawerContentScrollView>
    );
}
const useStyle = () => {
    const dimensions = useWindowDimensions();

    const styles = StyleSheet.create({
        flexContenedor: {
            flex: 1,
            display: "flex",
            
          },
        drawerHeader: {
            padding: 25,
            bottom: 8,
            justifyContent: "center",
            backgroundColor: '#2C4B9A',
            margin: 0,
            flex: 1,
        },
        drawerHeaderText: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
        },
        separador:{
            margin: 10,
            height: 2,
            backgroundColor:'#2c4b9a8a'
        }
    })
  
    return { styles }
}
// const styles = StyleSheet.create({
//   drawerHeader: {
//     padding: 23,
//     bottom: 30,
//     backgroundColor: '#2C4B9A',
    
//   },
//   drawerHeaderText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });