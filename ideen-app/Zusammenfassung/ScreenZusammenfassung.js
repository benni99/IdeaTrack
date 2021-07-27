import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, ScrollView} from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Title, TextInput, Button, Appbar, Menu, List } from 'react-native-paper';

import ScreenMain from '../Main/ScreenMain';
import AppbarHeader from './AppbarHeaderZusammenfassung';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function ScreenZusammenfassung ({ navigation, route }) {
    
    const userProblem = route.params.userProblem;  
    const userLoesung1 = route.params.userLoesung1;
    const userLoesung2 = route.params.userLoesung2;
    const userLoesung3 = route.params.userLoesung3; 
    
    
    return(
         
        
        <View>
            <AppbarHeader navigation={navigation} />
            <ScrollView>
                <Title style={styles.titel}>Ihr Problem:</Title>
                <Text style={styles.textProblem}>{userProblem}</Text>
                
                <List.Item style={styles.checkboxen} left={props => <List.Icon icon='check-circle'/>} title={userLoesung1} />
                <List.Item style={styles.checkboxen2} left={props => <List.Icon icon='check-circle'/>} title={userLoesung2} />
                <List.Item style={styles.checkboxen2} left={props => <List.Icon icon='check-circle'/>} title={userLoesung3} />
                
               
                <Button onPress= {() => navigation.navigate("ScreenMain")} mode='contained' style={styles.buttonNeuesProblem}>
                    NEUES PROBLEM
                </Button>
            
                </ScrollView>
        </View>
    )
    
}


const styles = StyleSheet.create({
    checkboxen: {
        marginTop: hp('15%')
    },
    checkboxen2: {
        marginTop: hp('1%')
    },
    titel: {
        marginTop: hp('2%'), 
        marginLeft: wp('8%'),
        textAlign: 'left', 
        fontSize: 20,
        fontWeight: 'bold'
    },
    textFett: {
        fontWeight: 'bold', 
        fontSize: 18
    },
    buttonNeuesProblem: {
        width: wp('70%'),  
        marginHorizontal: wp('15%'), 
        marginVertical: hp('19%'),
        paddingTop: hp('1%'),
        paddingBottom: hp('1%'),
    },
    textfeld1: {
        marginTop: hp('15%'),
        width: wp('90%'),
        alignSelf:'center',
        fontSize: 14
    },
    zufallsWort: {
        backgroundColor: 'lightgrey',
        height: hp('9%'),
        width: wp('85%'),
        marginLeft: wp('7.5%'),
        marginTop: hp('10%')
    },
    textBeschreibung: {
        textAlign: 'center',
        marginTop: hp('15%'),
        color: 'grey'
    },
    textProblem: {
        fontSize: 18,
        marginLeft: wp('8%')
    }
})
