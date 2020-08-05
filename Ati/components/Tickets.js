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
import {Input, Card, Button,Header } from 'react-native-elements';



class Tickets extends Component {



    static navigationOptions = {
        title: 'Tickets'
    }
 
    constructor(props) {
        super(props);

        this.state = {
            location: '',
            children: '',
            Adults: ''
        }
    }
    


    render() {
        return(

            

            <View>

            <Header
                outerContainerStyles={styles.topMenu}
                centerComponent={{text: 'Tickets', style: {color: '#fff', fontWeight: 'bold', fontSize: 18}}}
             />

                <Text style={styles.heading}>
                    Book Your Ticket
                </Text>
                <Card>
                <Input
                    placeholder="Enter the Location"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(location) => this.setState({location})}
                    value={this.state.location}
                    containerStyle={styles.formInput}
                    />

                <Input
                    placeholder="Enter the number of Children"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(children) => this.setState({children})}
                    value={this.state.persons}
                    containerStyle={styles.formInput}
                    />

                <Input
                    placeholder="Enter the number of Adults"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(Adults) => this.setState({Adults})}
                    value={this.state.Adults}
                    containerStyle={styles.formInput}
                    />

                
                <Button
                   title= "Submit"
                   />


                </Card>
        
            </View>
        );
    }



}



const styles = StyleSheet.create({
    formInput: {
        margin: 20
    },
    topMenu: {
        height: 53,
        backgroundColor: '#64b5f6',
      },
      heading: {
        fontFamily: 'serif',
        fontSize: 25,
        textAlign: 'center',
        color: '#EB144C'

    }
});
export default Tickets;



