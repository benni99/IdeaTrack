import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import Logo from './Logo';
import TextField from './TextField';
import ButtonWeiter from './ButtonWeiter';
import ButtonBeginnen from './ButtonBeginnen';
import ProblemScreen from './ProblemScreen';



export default function HomeScreen ({ navigation }) {
  return (
    <View style={styles.hintergrund}>
        <Logo />
        <TextField />
        <ButtonBeginnen 
          onPress={() => navigation.navigate("Problem")}
          
        />
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