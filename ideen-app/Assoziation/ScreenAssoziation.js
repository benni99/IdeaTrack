import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, Alert, ScrollView} from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Title, TextInput, Button, Appbar, Menu } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import InputScrollView from 'react-native-input-scroll-view';

import AppbarHeader from './AppbarHeaderAssoziation';



export default function ScreenAssoziation ({ navigation, route }) {
    
    const userProblem = route.params.userProblem;
    const randomNumber = route.params.randomNumber;
    
    const [userAssoziation1, setUserAssoziation1] = useState('');
    const [userAssoziation2, setUserAssoziation2] = useState('');
    const [userAssoziation3, setUserAssoziation3] = useState('');
    
    var words = [
        "Familie",
        "Vermögen",
        "Karriere",
        "Hobby",
        "Freunde",
        "Natur",
        "Wissen",
        "Bruder",
        "Glauben",
        "Technologie",
        "Reisen",
        "Wohlbefinden",
        "Schmerz",
        "Beziehung",
        "Globalisierung",
        "Heimat",
        "Eltern",
        "Winter",
    ];
    //const min = 1;
    //const max = 18;
    //const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    
    //const rnd = randomNumber;
    const lastFieldRef = useRef();
    const lastFieldRef2 = useRef();
    

    return(
         
        
        <View>
            <AppbarHeader navigation={navigation} />
            
            <InputScrollView>
            <ScrollView>
                
                <Title style={styles.titel}>Ihr zufälliges Wort:</Title>
                <Text style={styles.zufallsWort}>{words[randomNumber]}</Text>
                <Text style={styles.textBeschreibung}>Wählen Sie 3 Worte, welche Sie mit dem {'\n'}
                gezeigten Wort in Verbindung setzen.</Text>
                <Text></Text>
                <TextInput 
                    //autoFocus={true}
                    label='1. Wort'
                    value={userAssoziation1}
                    onChangeText={(userAssoziation1) => setUserAssoziation1(userAssoziation1)}
                    onSubmitEditing={() => {lastFieldRef.current.focus();}}
                    style={styles.textfeld1}
                    mode='outlined'
                    returnKeyType='next'
                />
                
                <TextInput 
                    
                    ref={lastFieldRef}
                    label='2. Wort'
                    value={userAssoziation2}
                    onChangeText={(userAssoziation2) => setUserAssoziation2(userAssoziation2)}
                    onSubmitEditing={() => {lastFieldRef2.current.focus();}}
                    style={styles.textfeld2}
                    mode='outlined'
                    returnKeyType='next'
                />
                <TextInput 
                    
                    ref={lastFieldRef2}
                    label='3. Wort'
                    value={userAssoziation3}
                    onChangeText={(userAssoziation3) => setUserAssoziation3(userAssoziation3)}
                    style={styles.textfeld2}
                    mode='outlined'
                    returnKeyType='next'
                />
                
                <Button onPress= {() => navigation.navigate("ScreenLösung", {userProblem, userAssoziation1, userAssoziation2, userAssoziation3})} mode='contained' style={styles.buttonLösungen}>
                    LÖSUNGEN FINDEN
                </Button>
                
                </ScrollView>
                </InputScrollView>
        </View>
        
    )
    
}


const styles = StyleSheet.create({
    titel: {
        marginTop: hp('2%'), 
        marginLeft: wp('7.5%'),
        textAlign: 'left', 
        fontSize: 20,
        fontWeight: 'bold'
    },
    textFett: {
        fontWeight: 'bold', 
        fontSize: 18
    },
    buttonLösungen: {
        width: wp('70%'), 
        marginHorizontal: wp('15%'), 
        marginVertical: hp('11.5%'),
        paddingTop: hp('1%'),
        paddingBottom: hp('1%'),
    },
    textfeld1: {
        marginTop: hp('5%'),
        width: wp('90%'),
        alignSelf:'center',
        fontSize: 14
    },
    textfeld2: {
        marginTop: hp('2.5%'),
        width: wp('90%'),
        alignSelf:'center',
        fontSize: 14
    },
    zufallsWort: {
        backgroundColor: 'lightgrey',
        width: wp('85%'),
        marginLeft: wp('7.5%'),
        fontSize: 42,
        textAlign: 'center',
        paddingVertical: hp('2%')
    },
    textBeschreibung: {
        textAlign: 'center',
        marginTop: hp('7%'),
        color: 'grey'
    }
})
