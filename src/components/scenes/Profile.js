import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ActivityIndicator, FlatList, Dimensions } from 'react-native';
import {  Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconC from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import _ from 'lodash';

import styles from '../styles/style';
import colors from '../styles/colors';

const { width, hieght } = Dimensions.get('window');
import img from "../../assets/images/img.jpg";

export default class Profile extends Component {
    render(){
        return(
            <View>
                <View style={styles.header}>
                <Text style={{ fontWeight: '600', flex: 1, textAlign: 'center', fontSize: 18, fontFamily: "ProximaNova-Semibold" }} > Chisom Dike </Text>
                    <Icon size={26} name='brightness-low' onPress={this.addPerson} color="black"  />  
                </View>
                <View style={{ height: width/2, width }}> 
                    <View style={{ width: '40%', }}>
                            <Image source={{img}} style={{ width: 70, height: 70, borderRadius: 70 }} />
                    </View>
                </View>

            </View>
        );
    }
}