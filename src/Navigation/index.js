import { createBottomTabNavigator } from 'react-navigation';
import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { 
    Main,
    CameraClass,
    Favorite,
    Gallery,
    Profile,
    Search,
 } from '../components';

export default createBottomTabNavigator({
    Main: { 
        screen: Main,
        navigationOptions: {
            tabBarLabel: ' ',
            tabBarIcon: ({ tintColor }) => (
                <Icon size={26} name='home' color={tintColor}  />
            )
        }
    }, 
    Search: { 
        screen: Search,
        navigationOptions: {
            tabBarLabel: ' ',
            tabBarIcon: ({ tintColor }) => (
                <Icon size={26} name='search' color={tintColor}  />
            )
        }
    },
    Gallery: { 
        screen: Gallery,
        navigationOptions: {
            tabBarLabel: ' ',
            tabBarIcon: ({ tintColor }) => (
                <Icon size={26} name='add-box' color={tintColor}  />
            )
        }
    },
    Camera: { 
        screen: CameraClass,
        navigationOptions: {
            tabBarLabel: ' ',
            tabBarIcon: ({ tintColor }) => (
                <Icon size={26} name='photo-camera' color={tintColor}  />
            )
        }
    },
    
    Favorite: {
        screen: Favorite,
        navigationOptions: {
            tabBarLabel: ' ',
            tabBarIcon: ({ tintColor }) => (
                <Icon size={26} name='favorite' color={tintColor}  /> 
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: ' ',
            tabBarIcon: ({ tintColor }) => (
                <Icon size={26} name='person' color={tintColor}  /> 
            )
        }
    }
}, {
    initialRouteName: 'Profile',
    activeTintColor: 'black',
    inactiveTintColor: '#3e2465',
  });