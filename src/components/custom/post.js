import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Paper } from 'react-native-paper';

import styles from '../styles/style';

const img1 = require('../../assets/images/01.jpg');
const Post = ({ item, index }) => (
    <View style={{ flex: 1 }}>
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
        <View>
        </View>
    </View>   
);

export default Post;