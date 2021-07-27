import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView} from 'react-native';

import { DefaultTheme, Provider as PaperProvider, Title, TextInput, Button, Appbar, Menu, ProgressBar } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppbarHeader from './AppbarHeader';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

 
export default function ScreenMain ({ navigation }) {
    
    const [userProblem, setUserProblem] = useState('');
    //useEffect(() => {setUserProblem('')}, [])
    const randomNumber = Math.floor(Math.random() * 18);


    return(
        
        
        <View>
            
            <AppbarHeader />
            <ScrollView>
            <View style={styles.textWrapper}>
                <Title style={styles.titel}>
                <Text style={styles.textFett}>IdeaTrack</Text> hilft Ihnen, Lösungen für Ihr {'\n'}
                Problem zu finden.
                </Title>
                <TextInput 
                    label='Beschreiben Sie, was Sie gerade beschäftigt.'
                    value={userProblem}
                    onChangeText={(userProblem) => setUserProblem(userProblem)}
                    style={styles.textfeld}
                    mode='outlined'
                />
                <Text style={styles.textDrunter}>In wenigen Worten</Text>
                
                <Button onPress= {() => navigation.navigate("ScreenAssoziation", {userProblem, randomNumber})} mode='contained' style={styles.buttonLosGehts}>
                    LOS GEHT'S
                </Button>
                
            </View>
            </ScrollView>
        </View>
    )
    
    
}


const styles = StyleSheet.create({
    
    titel: {
        marginTop: hp('10%'), 
        textAlign: 'center', 
        fontSize: 18
    },
    textFett: {
        fontWeight: 'bold', 
        fontSize: 18
    },
    buttonLosGehts: {
        width: wp('70%'), 
        marginHorizontal: wp('15%'), 
        marginVertical: hp('27%'),
        paddingTop: hp('1%'),
        paddingBottom: hp('1%'),
    },
    textfeld: {
        marginTop: hp('15%'),
        width: wp('90%'),
        alignSelf:'center',
        fontSize: 14
    },
    textDrunter: {
        marginHorizontal: wp('6%'),
        marginVertical: hp('1%'),
        fontSize: 12,
        color: 'grey'
    }
})
