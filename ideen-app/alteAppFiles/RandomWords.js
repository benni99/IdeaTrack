import { StatusBar } from 'expo-status-bar';
import React from 'react';

GenerateRandomNumber = () => {
    const words = [
        {value: "Familie"},
        {value: "Vermögen"},
        {value: "Karriere"},
        {value: "Hobby"},
        {value: "Freunde"},
        {value: "Natur"},
        {value: "Wissen"},
        {value: "Wissenschaft"},
        {value: "Glauben"},
        {value: "Technologie"},
        {value: "Reisen"},
        {value: "Wohlbefinden"},
        {value: "Schmerz"},
        {value: "Beziehung"},
        {value: "Globalisierung"},
        {value: "Heimat"},
        {value: "Eltern"},
        {value: "Winter"},
    ]
    
    var RandomNumber = Math.floor(Math.random() * 100) + 1;

}