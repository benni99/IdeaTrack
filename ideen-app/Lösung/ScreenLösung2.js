import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, ScrollView} from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Title, TextInput, Button, Appbar, Menu, ProgressBar, Colors } from 'react-native-paper';
import AppbarHeader from './AppbarHeaderLösung';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function ScreenLösung2 ({ navigation, route }) {
    
    const userProblem = route.params.userProblem;  
    const userAssoziation1 = route.params.userAssoziation1;  
    const userAssoziation2 = route.params.userAssoziation2;  
    const userAssoziation3 = route.params.userAssoziation3; 
    const userLoesung1 = route.params.userLoesung1;  


    const [userLoesung2, setUserLoesung2] = useState('');

    return(
         
        
        <View>
            <AppbarHeader navigation={navigation} />
            <ScrollView>
                <Title style={styles.titel}>Ihr Problem:</Title>
                <Text style={styles.textProblem}>{userProblem}</Text>
                
                <Text style={styles.textBeschreibung}>Finden Sie zu den zuvor eingegebenen Worten {'\n'}
                je einen Lösungsansatz!</Text>
                <Text style={styles.assoziationsWort}>{userAssoziation2}</Text>
                <TextInput 
                    label='2. Lösung'
                    value={userLoesung2}
                    onChangeText={(userLoesung2) => setUserLoesung2(userLoesung2)}
                    style={styles.textfeld1}
                    mode='outlined'
                />
                
                
                <Button onPress= {() => navigation.navigate("ScreenLösung3", {userProblem, userAssoziation1, userAssoziation2, userAssoziation3, userLoesung1, userLoesung2})} mode='contained' style={styles.buttonAssoziation}>
                    NÄCHSTE ASSOZIATION
                </Button>
            
                </ScrollView>
        </View>
    )
    
}


const styles = StyleSheet.create({
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
    buttonAssoziation: {
        width: wp('70%'), 
        marginHorizontal: wp('15%'), 
        marginVertical: hp('23.5%'),
        paddingTop: hp('1%'),
        paddingBottom: hp('1%'),
    },
    textfeld1: {
        marginTop: hp('7%'),
        width: wp('90%'),
        alignSelf:'center',
        fontSize: 14
    },
    assoziationsWort: {
        backgroundColor: 'lightgrey',
        height: hp('9%'),
        width: wp('85%'),
        marginLeft: wp('7.5%'),
        marginTop: hp('4%'),
        textAlign: 'center',
        fontSize: 46,
        paddingTop: hp('1%')
    },
    textBeschreibung: {
        textAlign: 'center',
        marginTop: hp('7%'),
        color: 'grey'
    },
    textProblem: {
        fontSize: 18,
        marginLeft: wp('8%')
    }
})
