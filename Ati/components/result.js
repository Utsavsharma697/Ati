import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Platform,
    Alert,
    Button
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import { Header } from 'react-native-elements'

import { createDrawerNavigator } from 'react-navigation-drawer';

import { Card } from 'react-native-elements';


import MapView, { Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { ScrollView } from 'react-native-gesture-handler';
import Guides from './Guides';
import Tickets from './Tickets';
import{FontAwesomeIcon} from 'react-native-vector-icons';



class MapTab extends Component {


    


    static navigationOptions = {
        
        title: Map
    };
    

    render() {
        return (
        
        

          <ScrollView>
              <Header
                outerContainerStyles={styles.topMenu}
                centerComponent={{text: 'Map', style: {color: '#fff', fontWeight: 'bold', fontSize: 18}}}
             />
              
            
            <View
               
                 backgroundColor="FFFFFF">

                    
                    <Text style={styles.heading}>
                        ATITHI
                    </Text>
            
            <MapView
                style={styles.map}
                region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                     }}
            />
            
                <Card>
                
                   <Text style={styles.textstyle}> Place 1 to Place 2 </Text>
                    <Text style={styles.textstyle}> Place 2 to Place 3 </Text>
                   <Text style={styles.textstyle}> Place 3 to Place 4 </Text>
                </Card>
            </View>

            </ScrollView>
            
        );
    }
};

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    map: {
        
        height: 450,
        marginTop: 50,
        marginLeft:5,
        marginRight: 5,
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0, //default is 1
        shadowRadius: 0,
        paddingLeft: 5
        
    
    },

    heading: {
        marginTop:20,
        
        textAlign: 'center',
        fontSize: 60, 
        color: '#607D8B',
        fontFamily: "Roboto"
     
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
      },
      drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
      },
      
      topMenu: {
        height: 53,
        backgroundColor: '#64b5f6',
      },
      textstyle: {
          
          fontSize: 20,
          fontFamily: 'serif'
      }
});



const Drawer = createDrawerNavigator({
    
    Map: {
        screen: MapTab,
        fontFamily: 'serif',
        navigationOptions: {
            title: 'Map',
            drawerLabel: 'Map'
        }
    },

    Guide: {
        screen: Guides,
        fontFamily: 'serif',
        navigationOptions: {
            title: 'guides',
            drawerLabel: 'Guides'
        }
        },


    Tickets: {
        screen: Tickets,
        fontFamily: 'serif',
        navigationOptions: {
            title: 'Tickets',
            drawerLabel: 'Tickets'
        }
    
    },


    
    
});



export default createAppContainer(Drawer);