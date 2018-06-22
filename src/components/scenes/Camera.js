import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from '../styles/style';
import cameraStyle from '../styles/Camera';

const { width } = Dimensions.get('window');
export default class CameraClass extends Component {

     takePicture= async (camera) => {
        try {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
        console.log('data captured', data.uri);
        } catch (error){
            console.log('error', error);
        }
          
      }

      readbarCode = (e) => {
        console.log('barcode', e);
      }

    render(){
        return(
            <RNCamera
                ref={(cam) => {
                    this.camera = cam;
                }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
                onBarCodeRead={this.readbarCode}
                >
                <View style={cameraStyle.container}> 
                    <TouchableOpacity onPress={this.takePicture.bind(this)} activeOpacity={0.7}>
                        <View style={cameraStyle.topLayerButton}>
                        <View style={cameraStyle.innerLayerBtn} />
                        </View>
                    </TouchableOpacity>
                </View>

            </RNCamera>
        );
    }
}