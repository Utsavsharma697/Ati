import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Platform,
    Alert
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Header } from 'react-native-elements';




class Guides extends Component {

    static navigationOptions = {
        title: 'Guides'
    }

    render() {
        return(
            <ScrollView>

            <Header
                outerContainerStyles={styles.topMenu}
                centerComponent={{text: 'Guides', style: {color: '#fff', fontWeight: 'bold', fontSize: 18}}}
             />

                <Text style={styles.heading}>
                    Available Guides
                </Text>
                <Card>
                    <Text style={styles.textstyle}>
                        Name:{"\n"}
                        Phone:{"\n"}
                        Rating:{"\n"}
                        Price:{"\n"} {"\n"}
                    </Text>
                </Card>
                <Card>
                    <Text style={styles.textstyle}>
                        Name:{"\n"}
                        Phone:{"\n"}
                        Rating:{"\n"}
                        Price:{"\n"}{"\n"}
                    </Text>
                </Card>
                <Card>
                    <Text style={styles.textstyle}>
                        Name:{"\n"}
                        Phone:{"\n"}
                        Rating:{"\n"}
                        Price:{"\n"}{"\n"}
                    </Text>
                </Card>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    topMenu: {
        height: 53,
        backgroundColor: '#64b5f6',
      },
      textstyle: {
          
        fontSize: 20,
        fontFamily: 'serif'
    },
    heading: {
        fontFamily: 'serif',
        fontSize: 25,
        textAlign: 'center',
        color: '#EB144C'

    }
})

export default Guides;