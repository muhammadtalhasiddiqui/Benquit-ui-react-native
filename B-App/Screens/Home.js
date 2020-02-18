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
import { connect } from "react-redux";

import LinearGradient from 'react-native-linear-gradient';
import LineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { clearSession } from "../store/action/authAction";
import Footer from './Components/Footer';
import { Header, Left, Body, Right } from 'native-base';

const colors = ['#7d07c4', '#aa068e'];

let components = [
  {
    id: 1,
    text: 'Enquiries',
    src: require('../assets/inquiry.png'),
  },
  {
    id: 2,
    text: "Today's Event",
    src: require('../assets/calender.png'),
  },
  {
    id: 3,
    text: 'Appointments',
    src: require('../assets/appointment.png'),
  },
  {
    id: 4,
    text: 'Follow Ups',
    src: require('../assets/follow.png'),
  },
  {
    id: 5,
    text: 'GST Payble',
    src: require('../assets/payment-01.png'),
  },
  {
    id: 6,
    text: 'My Clients',
    src: require('../assets/client.png'),
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient colors={colors}>
          {/* <StatusBar barStyle={'light-content'} backgroundColor={'#b00589'} /> */}
          <View
            style={{
              height: 65,
              flexDirection: 'row',
              marginHorizontal: 20,
              alignItems: 'center',
            }}>
            <View style={{ flex: 1 }}>
              <LineIcons name="menu" color="white" size={22} />
            </View>
            <View style={{ flex: 5 }}>
              <Text style={{ alignSelf: 'center', fontSize: 28, color: 'white' }}>
                HOME
              </Text>
            </View>

            <View style={{ flex: 1 }}>
            </View>
          </View>
        </LinearGradient>
        <ScrollView style={{ marginBottom: 52 }}>
          <Image
            source={require('../assets/hotel.jpg')}
            style={{
              height: 200,
              width: Dimensions.get('screen').width,
              resizeMode: 'stretch',
            }}
          />
          {components.map(item => (
            <View key={item.id} style={styles.headView}>
              <View style={styles.rView}>
                <View style={{ flex: 0.13 }}>
                  <Image source={item.src} style={{ height: 25, width: 25 }} />
                </View>
                <LinearGradient colors={colors} style={styles.gradient}>
                  <View style={styles.gView} />
                  <Text style={[styles.title, { flex: 3 }]}>{item.text}</Text>
                  <TouchableOpacity style={styles.to} onPress={() => this.props.navigation.navigate("MyEvents")}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>2 New</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          ))}
        </ScrollView>
        <Footer logout={this.props.submit} />
      </SafeAreaView>
    );
  }
}


const mapStateToProps = state => {
  return {
    progress: state.authReducer.progress,
    error: state.authReducer.error
  }
}

let mapDispatchToPops = dispatch => {
  return {
    submit: () => {
      dispatch(clearSession())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToPops)(Home)

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
});
