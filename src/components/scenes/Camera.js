import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Camera from 'react-native-camera';
import styles from '../styles/style';

const { width } = Dimensions.get('window');
export default class CameraClass extends Component {

    async takePicture() {
        try {
        const data  = await this.camera.capture();
        console.log('data captured', data);
        } catch (error){
            console.log('error', error);
        }
          
      }

    render(){
        return(
            <Camera
                ref={(cam) => {
                    this.camera = cam;
                }}
                style={styles.preview}
                aspect={Camera.constants.Aspect.fill}>
                {/* <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
                    [CAPTURE]
                </Text> */}
                <View style={{ height:width/2, width, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}> 
                    <TouchableOpacity onPress={this.takePicture.bind(this)} activeOpacity={0.7}>
                        <View style={{ width: width/3, height: width/3, borderRadius: width/3, backgroundColor: '#c9c9c9', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: width/5, height: width/5, borderRadius: width/5, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }} />
                        </View>
                    </TouchableOpacity>
                </View>

            </Camera>
        );
    }
}