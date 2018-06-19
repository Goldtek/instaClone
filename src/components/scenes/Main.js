import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import {  Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconC from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import _ from 'lodash';

import styles from '../styles/style';
import colors from '../styles/colors';
import Status from '../custom/status';
import Post from '../custom/post';


export default class Main extends Component {

    constructor(){
        super();
        this.state = {
            data: [],
            loading: true,
        }
    }

    componentDidMount(){
       this.fetchData();
    }

    fetchData = async () => {
        const { data } = await axios.get('https://randomuser.me/api/?results=10&format=json');
        results = _.get(data, 'results', []);
         this.setState({ data: results, loading:false });
    }
    capture = () => {
        console.log('capture')
    }

    addPerson = () => {
        console.log('add Person');
    }

    _renderEmptyList = () => (
        <View style={{ marginTop: 10 }}>        
        </View>
      );
    

   
    render(){
        return(
               <View>
                    <View style={styles.header}>
                        <Icon size={26} name='camera-alt' onPress={this.capture} color="black" />
                       <Text style={{ fontWeight: '600', flex: 1, textAlign: 'center', fontSize: 18, fontFamily: "ProximaNova-Semibold" }} > InstaClone </Text>
                        <IconC size={26} name='ios-send' onPress={this.addPerson} color="black"  />  
                    </View>
                    {!this.state.loading ? (
                    <View>
                        <View style={{ paddingVertical: 5 }}>
                        <FlatList
                            data={this.state.data}
                            //ItemSeparatorComponent={this.space}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => (
                            <Status item={item}/>
                            )}
                            keyExtractor={(item, index) => String(index)}
                            ListEmptyComponent={this._renderEmptyList()}
                        />
                        </View>
                        <FlatList 
                            data={this.state.data}
                            renderItem ={({ item }) => (
                                <Post item={item} />
                            ) }
                            keyExtractor={(item, index )=> String(index)}
                            ListEmptyComponent={this._renderEmptyList()}
                            refreshing  
                        />
                     </View>   
                ) :
                ( <ActivityIndicator size={30} />)}
          </View>
        );
    }
}       