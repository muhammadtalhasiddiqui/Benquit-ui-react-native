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
  Modal
} from 'react-native';
import Footer from '../Components/Footer';
import Header from '../Components/header';
import Calender from '../Components/calender';
import { Form, Item, Label, Input, CheckBox, ListItem, Body } from 'native-base';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';

const gColors = ['#7d07c4', '#aa068e'];
const placeholderColor = 'grey'

export default class bookingPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      lat: this.props.navigation.getParam('lat'),
      lng: this.props.navigation.getParam('lng'),
      fadd: this.props.navigation.getParam('fadd'),
      calendarVisible: false,
      name:'',
      nopsns:'',
      theme:'',
      date:'',
      sound: false,
      light: false,
      otherReq:'',
    }
  }
  componentDidMount = () => {

  }
  setCalendarVisible = (boolvar) => {
    console.log("setCalender Visible: ", boolvar)
    this.setState({ calendarVisible: boolvar })
  }
  render() {
    console.log("Name: ", this.state.name, "nopsns: ", this.state.nopsns,"Theme: ",this.state.theme,"Sound:",this.state.sound,"Light: ",this.state.light,"Other Requirements: ",this.state.otherReq)
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({ modalVisible: false })
          }}>
          <View style={styles.modalMain}>
            <LinearGradient colors={gColors} style={styles.gradientModal}>
              <View style={styles.flexContainerModal}>
                <Text style={styles.modalText}>Planet has been created!</Text>
              </View>

              <View style={styles.flexContainerModal}>
                <TouchableOpacity
                  style={{}}
                  onPress={() => {
                    this.setState({ modalVisible: false });
                  }}>
                  <Text style={styles.modalBtn}>OK</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </Modal>
        <Calender visible={this.state.calendarVisible} invisible={this.setCalendarVisible} />

        <Header title="Booking Panel" />
        <ScrollView>

          <Form style={{ padding: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Label style={styles.bigTxt}>All Fields are Required</Label>
              <Label style={{ color: gColors[0], fontSize: 15, fontWeight: 'bold' }}>Price {'\n'}$0.00</Label>
            </View>
            <Item style={styles.inputMain}>
              <Input onChangeText={(name)=>this.setState({name})} placeholder="Your Name" style={styles.inputTxt} placeholderTextColor={placeholderColor} />
            </Item>
            <Item style={styles.inputMain}>
              <Input onChangeText={(nopsns)=>this.setState({nopsns})} style={styles.inputTxt} keyboardType="number-pad" placeholder='Number of Persons' placeholderTextColor={placeholderColor} />
            </Item>
            <Item style={styles.inputMain}>
              <Input onChangeText={(theme)=>this.setState({theme})} style={styles.inputTxt} placeholder='Event Theme' placeholderTextColor={placeholderColor} />
            </Item>

            <TouchableOpacity onPress={() => this.setCalendarVisible(true)}>
              <Item style={[styles.inputMain, { justifyContent: 'space-between' }]}>
                <Text style={[styles.inputTxt, { color: placeholderColor, marginLeft: 0 }]}>Select Date</Text>
                <EvilIcons name='calendar' size={28} />
              </Item>
            </TouchableOpacity>

            <View style={styles.checkBoxContainer}>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>Sound</Text>
                <CheckBox color='#D593F2' style={styles.checkBox} checked={this.state.sound} onPress={() => this.setState({ sound: !this.state.sound })} />
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>Focus Lights</Text>
                <CheckBox color='#D593F2' style={styles.checkBox} checked={this.state.light} onPress={() => this.setState({ light: !this.state.light })} />
              </View>
            </View>

            <View style={{borderColor:gColors[0],marginLeft:0,borderWidth:2,height:90,width:'100%',borderRadius:4}}>
              <Input onChangeText={(otherReq)=>this.setState({otherReq})} style={styles.inputTxt} placeholder='Other requirements' placeholderTextColor={placeholderColor} />
            </View>

            <TouchableOpacity onPress={() => this.setState({ modalVisible: true })} onPress={() => this.setState({
              light
                : !this.state.light
            })}>
              <Text style={[styles.bigTxt, { marginTop: 30, alignSelf: 'center' }]}>Submit</Text>
            </TouchableOpacity>
          </Form>

        </ScrollView>
        <Footer />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  inputMain: {
    borderBottomColor: gColors[0],
    height: 50,
    marginTop: 30,
    marginLeft: 0,
    borderBottomWidth: 2
  },
  checkBoxContainer: {
    height: 50,
    marginTop: 30,
    // marginLeft: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '55%',
    alignSelf: 'center'
  },
  inputTxt: {
    fontWeight: 'bold',
    fontSize: 16
  },
  bigTxt: {
    color: gColors[0],
    fontWeight: 'bold',
    fontSize: 20,
    textDecorationLine: 'underline'
  },
  modalMain: {
    backgroundColor: 'rgba(0,0,0,.6)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gradientModal: {
    width: '50%',
    height: '30%',
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 35,
    justifyContent: 'center'
  },
  flexContainerModal: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  modalText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  modalBtn: {
    textDecorationLine: 'underline',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
  checkBox: {
    width: 20,
    height: 20,
    borderRadius: 20
  }
});
