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
                <View style={{ height: width/2, width, marginTop: 10 , marginLeft: 10, flexDirection: 'row'}}> 
                    <View style={{ width: '30%', }}>
                            <Image source={img} style={{ width: 90, height: 90, borderRadius: 90 }} />
                            <Text> Chisom Dike </Text>
                    </View>
                    <View style={{ width: '60%',marginTop: 10 }}>
                        <View style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}> 
                            <View> 
                                <Text> 3160</Text>
                                <Text> Posts </Text>
                            </View>
                            <View> 
                                <Text> 3160</Text>
                                <Text> Followers </Text>
                            </View>
                            <View> 
                                <Text> 3160</Text>
                                <Text> Following </Text>
                            </View>
                        </View> 
                        <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: '#c9c9c9', marginTop:10, height: 33, justifyContent: 'center', alignItems: 'center' }}>
                            <Text> Edit Profile </Text>
                        </TouchableOpacity>    
                    </View>
                </View>

            </View>
        );
    }
}