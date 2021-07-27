import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import Logo from './Logo';
import TextFieldIdeen from './TextFieldIdeen';
import TextInputIdeen from './TextInputIdeen';
import ButtonWeiter from './ButtonWeiter';

export default function IdeennScreen () {
  return (
<View style={styles.hintergrund}>
        <Logo />
        
        
        <TextFieldIdeen />
        <ButtonWeiter name="Weiter"/>
      
      
        
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