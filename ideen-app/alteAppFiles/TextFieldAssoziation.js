import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function TextFieldAssoziation () {
    return (
        <View>
            <Text style={styles.text}>
                Was assozieren Sie mit {"\n"}
                folgendem Wort? 
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
        top: 150,
        left: 70,
        backgroundColor: 'lightgrey',
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

