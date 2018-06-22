import React from 'react';
import { View, Text, Image, TouchableOpacity  } from 'react-native';


const Status = ({ item }) => (
    <View style={{ margin: 5, justifyContent: 'center', alignItems: 'center' }}>
    <TouchableOpacity activeOpacity={0.7} onPress={() => alert(item.name.first)}>
        <Image source={{ uri: item.picture.thumbnail }} style={{ borderRadius: 65, height: 65, width: 65, borderColor: '#d01078', borderWidth: 2 }}  />
    </TouchableOpacity>
        <Text> {item.name.first} </Text>
    </View>
);


export default Status;