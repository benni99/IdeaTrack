import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';

export default function ButtonBack (props) {
    return (
        <View >
            <TouchableOpacity onPress={props.onPress}>
                <Image 
                    style={styles.arrow}
                    source={require('./Backarrow.png')} />
            </TouchableOpacity>
            
            
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
    arrow: {
      position: 'absolute',
      height: 25,
      width: 30,
      top: 56,
      left: 20
    },
    arrowBox: {
      height: 100,
      width: 100
    }
    
  });