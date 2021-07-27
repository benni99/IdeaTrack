import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Title, TextInput, Button, Appbar, Menu, Drawer } from 'react-native-paper';
import AppbarHeader from '../Main/AppbarHeader';

 
export default function ScreenMenu ({ navigation }) {
    
    
    return(
        
        
        <View>
            <AppbarHeader />
                <Title style={styles.titel} />
                <Drawer></Drawer>
                
                
                
            
        
        </View>
    )
    
    
}


const styles = StyleSheet.create({
    titel: {
        marginTop: '15%', 
        textAlign: 'center', 
        fontSize: 18
    },
    textFett: {
        fontWeight: 'bold', 
        fontSize: 18
    },
    buttonLosGehts: {
        width: '70%', 
        marginHorizontal: '15%', 
        marginVertical: '71%',
        paddingTop: '2%',
        paddingBottom: '2%',
    },
    textfeld: {
        marginTop: '30%',
        width:'90%',
        alignSelf:'center',
        fontSize: 14
    },
    textDrunter: {
        marginHorizontal: '6%',
        marginVertical: '1%',
        fontSize: 12,
        color: 'grey'
    }
})
