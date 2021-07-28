import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Title, TextInput, Button, Appbar, Menu, Drawer } from 'react-native-paper';

import ScreenMain from './ScreenMain';





export default function AppbarHeader () {
const navigation = useNavigation();

    return(
        <Appbar.Header>
                    
                    <Menu.Item icon='menu' style={styles.appbarHeader} onPress={() => navigation.openDrawer()}/> 
                    <Appbar.Content title='IdeaTrack' style={styles.titel}/>   
            
        </Appbar.Header>
)}


  


  



  

//<Menu.Item icon='menu' style={styles.appbarHeader} onPress={() => {props.navigation.navigate("ScreenMenu")}}/> 

const styles = StyleSheet.create({
    titel: {
        marginHorizontal: '20%',
        
        
        
    },
    appbarHeader:{
        height: 30,
        width: 10
    }
}) 