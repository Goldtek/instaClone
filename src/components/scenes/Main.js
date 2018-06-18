import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import {  Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from '../styles/style';
import colors from '../styles/colors';


export default class Main extends Component {

    capture = () => {
        console.log('capture')
    }

    addPerson = () => {
        console.log('add Person');
    }
    render(){
        return(
            <View>
               <View style={styles.header}>
                    <Icon size={26} name='camera-alt' onPress={this.capture} />
                    <TextInput placeholder='search' style={{ flex:1, borderBottomWidth: 0 }} />
                    <Icon size={26} name='person-add' onPress={this.addPerson} />  
               </View>
               <FlatList
                data={data}
                ItemSeparatorComponent={this.space}
                horizontal={true}
                renderItem={({item}) =>
                    <Text style={{fontSize: 20, textAlign: 'center'}}>{item.num}</Text>
                }
                />
            </View>
        );
    }
}       