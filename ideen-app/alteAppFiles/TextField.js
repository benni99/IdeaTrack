import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function TextField () {
    return (
        <View>
            <Text style={styles.text}>
                Geben Sie ein Problem ein, das Sie {"\n"}
                gerade beschäftigt und <Text style= {styles.textIdeaTrack}>IdeaTrack </Text>wird{"\n"}
                Ihnen dabei helfen, eine Lösung{"\n"}
                zu finden.{"\n"} {"\n"}

                Mit einem Klick auf <Text style={styles.textBold}>"Beginnen" </Text> {"\n"}
                gelangen Sie zur nächsten Seite. 
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
        top: 240,
        left: 11,
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


