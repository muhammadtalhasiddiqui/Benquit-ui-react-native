import React from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';


export const ActiveLoader = () => {
    return (
            <ActivityIndicator style={{alignSelf: "center"}} size={40} color="purple" />
    )
}