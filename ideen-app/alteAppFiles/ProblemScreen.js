import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TextInput} from 'react-native';
import Logo from './Logo';
import TextFieldProblem from './TextFieldProblem';
import TextInputProblem from './TextInputProblem';
import ButtonWeiter from './ButtonWeiter';
import ButtonBack from './ButtonBack';

export default function ProblemScreen ({navigation}) {
  return (
    <View style={styles.hintergrund}>
        <Logo />
        <ButtonBack onPress={() => navigation.goBack()}/>
        <TextFieldProblem />
        <TextInputProblem />
        <ButtonWeiter 
        onPress={() => navigation.navigate("Assoziation")}/>
      
      
        
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
    
  },
  
  
});