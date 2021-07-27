import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createStackNavigator } from '@react-navigation/stack';

export default function ButtonWeiter (props) {
    return (
        <View style={styles.buttonText}>
            <Button
                onPress={props.onPress}
                title="Weiter"
                color='black'
            />
        </View>
        
    )
};

const styles = StyleSheet.create({
    buttonText: {
      flex: 1,
      backgroundColor: '#33ccff',
      position: 'absolute',
      top: 720,
      left: 121,
      borderWidth: 3,
      paddingTop: 5,
      paddingRight: 37,
      paddingLeft: 37,
      paddingBottom: 5
    },
})