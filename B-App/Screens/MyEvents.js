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

const colors = ['#7d07c4', '#aa068e'];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

import LinearGradient from 'react-native-linear-gradient';
import {Divider} from 'react-native-elements';
import {Calendar} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';

import Footer from './Components/Footer';

const today = new Date();

export default class MyEvents extends React.Component {
  constructor(props){
    super(props)
  }
  state = {
    day: today.getDate(),
    mon: months[today.getMonth()],
    year: today.getFullYear(),
    daymarked: `2019-12-10`,
  };

  setDate = date => {
    let month;
    if (date.month <= 10) {
      month = `0${date.month}`;
    } else month = date.month;
    this.setState({
      day: date.day,
      mon: months[date.month - 1],
      year: date.year,
      daymarked: `${date.year}-${month}-${date.day}`,
    });
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Text
            style={{
              textDecorationLine: 'underline',
              fontWeight: 'bold',
              fontFamily: 'verdana',
              fontSize: 30,
              alignSelf: 'center',
            }}>
            MY EVENTS
          </Text>
          <Divider style={{backgroundColor: 'black', height: 1.5}} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginVertical: 3,
            }}>
            <Text style={{fontWeight: 'bold'}}>Multiple Hall three</Text>
            <Text style={{fontWeight: 'bold'}}>Multiple Hall One</Text>
          </View>
          <Divider style={{backgroundColor: 'black', height: 1.5}} />
        </View>
        <ScrollView>
          <Calendar
            markedDates={{
              [this.state.daymarked]: {
                customStyles: {
                  container: {
                    backgroundColor: colors[2],
                    borderRadius: 0,
                    width: 50,
                  },
                  text: {
                    color: 'white',
                    fontWeight: 'bold',
                  },
                },
              },
            }}
            markingType={'custom'}
            style={{
              paddingHorizontal: 0,
            }}
            theme={{
              'stylesheet.calendar.header': {
                week: {
                  backgroundColor: '#2448c0',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  height: 38,
                  alignItems: 'center',
                  borderRadius: 3,
                },
              },
            }}
            renderArrow={direction =>
              direction == 'left' ? (
                <Icon name="ios-arrow-back" size={20} />
              ) : (
                <Icon name="ios-arrow-forward" size={20} />
              )
            }
            onDayPress={day => this.setDate(day)}
          />

          <View
            style={{
              backgroundColor: '#2448c0',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 38,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
              }}>{`${this.state.day} ${this.state.mon}, ${this.state.year}`}</Text>
          </View>
          <LinearGradient
            colors={colors}
            style={{
              flexDirection: 'row',
              paddingHorizontal: 30,
              justifyContent: 'space-between',
              height: 80,
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              Lorem {' \n'}Engagement
            </Text>
            <Text style={{color: 'white'}}>$12000</Text>
          </LinearGradient>

          <View>
            <Image
              source={require('../assets/hotel.jpg')}
              style={{
                height: 200,
                width: Dimensions.get('screen').width,
                resizeMode: 'stretch',
              }}
            />
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: '#f4f5f3',
            height: 40,
            width: 40,
            borderRadius: 20,
            position: 'absolute',
            bottom: 70,
            right: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon onPress={()=>this.props.navigation.navigate("PaymentTrial")} name="ios-add" color={colors[2]} size={20} />
        </View>
        <Footer />
      </SafeAreaView>
    );
  }
}
