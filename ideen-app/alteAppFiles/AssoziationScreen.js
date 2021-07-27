import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import Logo from './Logo';
import ListAssoziation from './ListAssoziation';
import TextFieldAssoziation from './TextFieldAssoziation';
import TextFieldRandomWord from './TextFieldRandomWord';
import ButtonWeiter from './ButtonWeiter';
import ButtonBack from './ButtonBack';

export default function AssoziationScreen ({ navigation }) {
  return (
    <View style={styles.hintergrund}>
        <Logo />
        <ButtonBack onPress={() => navigation.goBack()}/>
        <TextFieldAssoziation />
        <TextFieldRandomWord />
        <ListAssoziation />
        <ButtonWeiter 
        onPress={() => navigation.navigate()}/>
      
      
        
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999900',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  hintergrund: {
    position: 'absolute',
    marginTop: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#EEFFFF',
    
  }
  
});