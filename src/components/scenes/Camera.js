import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Camera from 'react-native-camera';
import styles from '../styles/style';


export default class CameraClass extends Component {

    async takePicture() {
        try {
        const { data } = await this.camera.capture();
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
                <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
                    [CAPTURE]
                </Text>
            </Camera>
        );
    }
}