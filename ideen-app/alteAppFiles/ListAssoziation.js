import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';



export default function ListAssoziation () {
    return (
      <View style={styles.hintergrund}>
            <Unorderedlist bulletUnicode={0x2022} style={styles.ul1}> 
                <TextInput
                    style={styles.input1}
                    placeholder="Assoziation 1"
                    keyboardType="default"
                    multiline='true'
                    returnKeyType='done'
                    blurOnSubmit='true'
                />
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022} style={styles.ul2}> 
                <TextInput
                    style={styles.input2}
                    placeholder="Assoziation 2"
                    keyboardType="default"
                    multiline='true'
                    returnKeyType='done'
                    blurOnSubmit='true'
                />
                </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022} style={styles.ul3}> 
                <TextInput
                    style={styles.input3}
                    placeholder="Assoziation 3"
                    keyboardType="default"
                    multiline='true'
                    returnKeyType='done'
                    blurOnSubmit='true'
                />
                </Unorderedlist>
            
      </View>
    )
  }

  const styles = StyleSheet.create({
    input1: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 475,
        left: 60,
        height: 25,
        width: 250,
        borderWidth: 2
      },
      input2: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 525,
        left: 60,
        height: 25,
        width: 250,
        borderWidth: 2
      },
      input3: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 575,
        left: 60,
        height: 25,
        width: 250,
        borderWidth: 2
      },
      ul1: {
        position: 'absolute',
        top: 460,
        left: 30,
        fontSize: 40
        
      },
      ul2: {
        position: 'absolute',
        top: 510,
        left: 30,
        fontSize: 40
        
      },
      ul3: {
        position: 'absolute',
        top: 560,
        left: 30,
        fontSize: 40
        
      }
});