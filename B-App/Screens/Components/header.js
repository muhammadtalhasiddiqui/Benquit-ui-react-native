import React from 'react';
import {
  SafeAreaView,
  View,
  Icons,
  Dimensions,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Badge } from 'react-native-elements';

const colors = ['#7d07c4', '#aa068e'];

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <LinearGradient colors={colors}>
        {/* <StatusBar barStyle={'light-content'} backgroundColor={'#b00589'} /> */}
        <View
          style={{
            height: 65,
            flexDirection: 'row',
            marginHorizontal: 20,
            alignItems: 'center',
          }}>
            {this.props.title=='Create New Planet'?
            null
            :
            <View style={{ flex: 1 }}></View>
            }
          <View style={{ flex: 2 }}>
            <Text style={{ alignSelf: 'center', fontSize: 24, color: 'white' }}>
              {this.props.title}
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: this.props.title == 'HOME' ? 'center' : 'flex-end' }}>
            <TouchableOpacity onPress={() => this.props.nav.navigate('userNotifications')}>
              <EvilIcons name={'bell'} color='white' size={32} />
              <Badge badgeStyle={{ backgroundColor: 'red' }}
                value={<Text style={{ fontSize: 10, color: 'white' }}>1</Text>}
                containerStyle={{ position: 'absolute', top: -4, right: 0 }}
              />
            </TouchableOpacity>

            <View style={[styles.verticalline]} />

            <MaterialIcons name='history' color='white' size={30} />
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  headView: { height: 40, marginTop: 10, paddingLeft: 20 },
  rView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  to: {
    backgroundColor: 'white',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 3,
    // marginLeft: Dimensions.get('screen').width - 220,
  },
  gradient: {
    flex: 0.97,
    flexDirection: 'row',
    alignItems: 'center',
    paddingEnd: 20
  },
  gView: {
    borderStyle: 'solid',
    borderRightWidth: 12,
    borderTopWidth: 40,
    borderTopColor: 'white',
    borderRightColor: 'transparent',
    flex: 0.1
  },
  title: { color: 'white' },
  verticalline: {
    borderWidth: 0.7,
    height: 23,
    borderColor: 'white',
    marginHorizontal: 5
  }
});
