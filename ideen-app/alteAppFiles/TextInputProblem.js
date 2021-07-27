import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function TextInputProblem () {
   
    
    return (
        <TextInput
                style={styles.input}
                placeholder="Fassen Sie ihr Problem kurz zusammen."
                keyboardType="default"
                multiline='true'
                returnKeyType='done'
                blurOnSubmit='true'
            />
        
    )
};


const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '45%',
        left: 20,
        height: 100,
        width: 350,
        borderWidth: 2
      }
});

//<TextInput
 //               style={styles.input}
   //             placeHolder="Fassen Sie Ihr Problem kurz zusammen."
      //      />