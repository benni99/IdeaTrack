import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function TextFieldRandomWord () {
    return (
        <View>
            <Text style={styles.text}>
                
            </Text>
        </View>
        
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        textAlign: 'center',
        alignContent: 'center',
        position: 'absolute',
        top: 330,
        left: 70,
        backgroundColor: '#b3ecff',
        paddingTop: 25,
        paddingRight: 25,
        paddingLeft: 25,
        paddingBottom: 25,
        borderWidth: 2,
        borderRadius: 10,
        overflow: 'hidden'
    },
    textIdeaTrack: {
        color: 'blue',
        fontWeight: 'bold',
    },
    textBold: {
        fontWeight: 'bold',
    }
    
        
    
})

