import React from 'react';
import { View, Text, Image } from 'react-native';
import IconC from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from '../styles/style';

const img1 = require('../../assets/images/01.jpg');
const Post = ({ item, index }) => (
    <View>
        <View style={styles.postHeader}>
            <View style={styles.postLeftHeader}>
                <Image source={{uri : item.picture.thumbnail }} style={styles.creator} />
                <Text style={{marginLeft: 5, fontFamily: 'ProximaNova-Bold' }}> {item.name.last} {item.name.first} </Text>
            </View>
            <Icon size={26} name="more-vert" />
        </View>
        <View style={styles.postContent}>
            <Image source={img1} style={styles.postImage} />
        </View>
        <View style={styles.postFooter}>
            <View style={styles.groupIcon}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <IconC size={26} name='md-heart-outline' color="black"  />  
                    <IconC size={26} name='ios-chatbubbles-outline' color="black" style={{ marginLeft: 10 }} />  
                    <IconC size={26} name='ios-send-outline'  color="black" style={{ marginLeft: 10 }} />  
                </View>
                <IconC size={26} name='ios-bookmark-outline' onPress={this.addPerson} color="black"  />
            </View>  
            <View style={{ flexDirection: 'row', paddingLeft: 10, marginVertical: 10 }}>
            <IconC size={20} name='md-heart' color="black"  />  
                <Text> 15 Likes </Text>
            </View>
        </View>
    </View>   
);

export default Post;