import React from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Title, TextInput, Button, Appbar, Menu } from 'react-native-paper';
import ScreenMain from '../Main/ScreenMain';

export default function AppbarHeader (props) {
    return(
        <Appbar.Header>
            <Appbar.BackAction onPress={() => {props.navigation.goBack()}}/>
            <Appbar.Content title='Lösungsfindung' style={styles.titel}/>   
        </Appbar.Header>

)}

const styles = StyleSheet.create({
    titel: {
        marginHorizontal: '2%',
    },
    appbarHeader: {
        height: 30,
        width: 10
    }
})