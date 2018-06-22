import { StyleSheet, Dimensions } from "react-native";
import colors, { darkBlack, lightBlack } from "./colors";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

container: { 
    height:width/2, width,
    backgroundColor: '#fff', 
    justifyContent: 'center',
    alignItems: 'center'
},

topLayerButton: { 
    width: width/3,
    height: width/3,
    borderRadius: width/3,
    backgroundColor: '#c9c9c9',
    justifyContent: 'center', 
    alignItems: 'center'
 },
 innerLayerBtn: {
    width: width/5,
    height: width/5, 
    borderRadius: width/5, 
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
     }

});