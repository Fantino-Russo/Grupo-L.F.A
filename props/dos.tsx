import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import {TextName, TextSurname, View} from '@/components/Themed';

export default function TabTwoScreen(){
    return(
        <View style={styles.container}> 
            <View style={styles.container}>
                <TextName style={styles.title} lightColor="#eee">Tab Two</TextName>
                <TextSurname style={styles.titleSurname}>Text surname</TextSurname>
                <TextSurname/>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            </View>
            <EditScreenInfo path="app/(tabs)/two.tsx"/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    titleSurname:{
        fontFamily:"arial",
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
  