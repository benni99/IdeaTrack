//import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import {  NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider, TextInput, Title, Button } from 'react-native-paper';
import ScreenMain from './Main/ScreenMain';
import ScreenAssoziation from './Assoziation/ScreenAssoziation';
import ScreenLösung from './Lösung/ScreenLösung';
import ScreenLösung2 from './Lösung/ScreenLösung2';
import ScreenLösung3 from './Lösung/ScreenLösung3';
import ScreenZusammenfassung from './Zusammenfassung/ScreenZusammenfassung';
import ScreenMenu from './Menu/ScreenMenu';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import ScreenHistorie from './Main/ScreenHistorie';


const AppStack = createStackNavigator();
const AppDrawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
  );
}

function Drawer() {
  return(
    
    <AppDrawer.Navigator  initialRouteName="Home">
      <AppDrawer.Screen  name="Home" component={Navigator} />
      <AppDrawer.Screen name="Historie" component={ScreenHistorie} />
    </AppDrawer.Navigator>
  )
}

  
function Navigator() {
  return (
    
      <AppStack.Navigator initialRouteName="ScreenMain" headerMode="none">
        <AppStack.Screen
          name="ScreenMain"
          component={ScreenMain}
        />
        
        <AppStack.Screen
          name="ScreenAssoziation"
          component={ScreenAssoziation}
        />

        <AppStack.Screen
          name="ScreenLösung"
          component={ScreenLösung}
        />

        <AppStack.Screen
          name="ScreenLösung2"
          component={ScreenLösung2}
        />

        <AppStack.Screen
          name="ScreenLösung3"
          component={ScreenLösung3}
        />

        <AppStack.Screen
          name="ScreenZusammenfassung"
          component={ScreenZusammenfassung}
        />
        
        <AppStack.Screen
          name="ScreenMenu"
          component={ScreenMenu}
        />
      </AppStack.Navigator>
    
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999900',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  hintergrund: {
    position: 'absolute',
    marginTop: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#EEFFFF',
    
  },
  drawer: {
    marginTop: '3%'
  }
  
});


