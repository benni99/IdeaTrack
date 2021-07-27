import { StyleSheet, Text, View, Alert, Title} from 'react-native';
import React from 'react'
import {  NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function ScreenHistorie () {
    const navigation = useNavigation();
    return(
        <View>
            <Title>Historie</Title>
        </View>
    )
}

const styles = StyleSheet.create({
    titel: {

    }
})