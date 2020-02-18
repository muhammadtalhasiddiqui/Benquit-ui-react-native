import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Icons, Dimensions, StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import LineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Footer extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <LinearGradient
        colors={['#7d07c4', '#aa068e']}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 50,
          // paddingTop:-40
          marginTop:-55,
        }}>
        <TouchableOpacity
          style={[
            styles.bottomItems,
            { borderRightWidth: 1.5, borderRightColor: 'white', width: "25%" },
          ]}>
          <LineIcons
            name="logout"
            color="white"
            size={20}
            style={{ fontWeight: 'bold' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomItems,
            { borderRightWidth: 1.5, borderRightColor: 'white', width: "25%" },
          ]}>
          <LineIcons name="home" color="white" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomItems,
            { borderRightWidth: 1.5, borderRightColor: 'white', width: "25%" },
          ]}>
          <AntDesign name="wechat" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.logout} style={[styles.bottomItems, { width: "25%" }]}>
          <Icon name="md-log-out" color="white" size={20} />
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  bottomItems: {
    paddingVertical: 3,
    justifyContent: 'center',
    width: Dimensions.get('screen').width / 4,
    alignItems: 'center',
    marginVertical: 5,
  },
});
