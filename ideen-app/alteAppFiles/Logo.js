import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Logo () {
    return (
        <View style={styles.logoText}>
            <Text style={styles.text}>IdeaTrack</Text>
        </View>
        
    )
};

const styles = StyleSheet.create({
    logoText: {
      flex: 1,
      position: 'absolute',
      top: 45,
      left: 118
    },
    text: {
        fontSize: 36,
        color: 'blue',
        fontWeight: 'bold',
    }
})
















