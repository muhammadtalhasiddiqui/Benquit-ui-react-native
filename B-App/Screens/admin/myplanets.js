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
  FlatList,

  TouchableHighlight
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import LineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Footer from '../Components/Footer';
import { SliderBox } from "react-native-image-slider-box";
import { Input, Button } from 'native-base';

const colors = ['#7d07c4', '#aa068e'];

const DATA = [
  { img: "https://source.unsplash.com/1024x768/?nature", imgName: 'Benquet1' },
  { img: "https://source.unsplash.com/1024x768/?tree", imgName: 'Benquet2' } // Network image
];


let components = [
  // {
  //   id: 1,
  //   text: 'Enquiries',
  //   src: require('../..//assets/Enquiries.png')
  // },

  {
    id: 2,
    text: "Today's Event",
    src: require('../../assets/calender.png'),
  },
  {
    id: 3,
    text: 'Appointments',
    src: require('../../assets/appointment.png'),
  },
  {
    id: 4,
    text: 'Follow Ups',
    src: require('../../assets/follow.png'),
  },
  {
    id: 5,
    text: 'GST Payble',
    src: require('../../assets/payment-01.png'),
  },
  {
    id: 6,
    text: 'My Clients',
    src: require('../../assets/client.png'),
  },

];

export default class PlanetDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        require('../../assets/hotel.jpg'),
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?tree", // Network image
        require('../../assets/hotel.jpg'),          // Local image

      ],
      color: 'white',
      color1: 'white'
    }
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

            <View style={{ flex: 5 }}>
              <Text style={{ alignSelf: 'center', fontSize: 28, color: 'white' }}>
                My Planet
              </Text>

            </View>



            <View style={{ flex: 1 }}>
            </View>
          </View>
        </LinearGradient>
        <ScrollView style={{ marginBottom: 52 }}>

          <SliderBox images={this.state.images} />
          <View style={styles.start}>
            <Text style={{ color: '#731991', fontWeight: 'bold', fontSize: 40, borderBottomColor: '#731991', border: 1, borderBottomWidth: 2 }}>My Planet</Text>

          </View>


          {/* image****************** */}
          <View style={{ width: '85%', alignSelf: 'center' }}>



            <FlatList
              data={DATA}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ width: 20 }}></View>}
              renderItem={({ item }) => {


                return (<View>

                  <Image
                    style={{
                      height: 200,
                      width: 200,

                    }}
                    source={{ uri: item.img }}
                    resizeMode='contain'
                  />
                  <Text style={{ textAlign: 'center', marginTop: -20, fontWeight: 'bold' }}>{item.imgName}</Text>
                </View>)
              }}
            />
          </View>

          {/* image****************** */}


          <LinearGradient style={{
            width: 200,
            height: 150,
            marginLeft: 25,
            marginTop: 20,
            paddingTop: 50,
            marginBottom: 20
            // paddingEnd:'5%'



          }} colors={colors}>
            {/* <StatusBar barStyle={'light-content'} backgroundColor={'#b00589'} /> */}
            <View
              style={{
                height: 65,

                flexDirection: 'row',
                marginHorizontal: 20,
                alignItems: 'center',
              }}>

              <View>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Admin') }}>
                  <Text style={{ fontSize: 25, color: 'white', textAlign: 'center' }}>Create New Planet</Text>
                </TouchableOpacity>

              </View>

            </View>
          </LinearGradient>





        </ScrollView>
        <Footer logout={this.props.submit} />
      </SafeAreaView>
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
  mView: {
    flexDirection: 'row',
    width: '95%',
    marginLeft: 20
  },

  title: { color: 'white' },
  start: {
    alignSelf: 'center',

  },
  bot: {
    width: '100%',
    backgroundColor: 'purple',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '10%',
    paddingRight: '10%',
    marginTop: 10,
    marginBottom: 2
  }
});
