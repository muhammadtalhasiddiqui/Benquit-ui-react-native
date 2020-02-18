import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Header, Body, Right, Icon, Left } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Footer from './Components/Footer';
const colors = ['#b00589', '#7d07c4', '#aa068e'];
export default class PaymentTrial extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let invoicesList = [
      {
        date: '25,Jan 2019',
        amount: 60,
        mode: 'cash',
      },
      {
        date: '24,Jan 2019',
        amount: 30,
        mode: 'cheque',
      },
      {
        date: '25,Jan 2019',
        amount: 60,
        mode: 'cash',
      },
      {
        date: '24,Jan 2019',
        amount: 30,
        mode: 'cheque',
      },
    ];
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <ImageBackground
            style={{ width: '100%' }}
            source={{ uri: 'https://s3.envato.com/files/248952681/preview.jpg' }}>
            <View style={{ padding: 10, alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>
                  Engagement on thursday
                </Text>
                <Text style={styles.imgbigtext}>Jan 22, 2019</Text>
              </View>

              <View style={{ marginTop: 15 }}>
                <Text style={[styles.imgbigtext]}>Lorem</Text>
                <Text style={styles.imgsmalltext}>Booked on 21,Jan 2019</Text>
              </View>
            </View>
            <View style={styles.horizonline} />

            <View style={styles.imagefooter}>
              <View>
                <Text style={[styles.imgbigtext]}>Lorem</Text>
                <Text style={styles.imgsmalltext}>Booked on 21,Jan 2019</Text>
              </View>

              <View style={[styles.verticalline, { borderColor: 'white' }]} />

              <View style={{}}>
                <Text style={[styles.imgbigtext]}>Lorem</Text>
                <Text style={styles.imgsmalltext}>Booked on 21,Jan 2019</Text>
              </View>
            </View>
          </ImageBackground>

          <View style={styles.recieptnav}>
            <Text style={styles.heading}>RECIEPT</Text>
            <View style={[styles.imagefooter, { marginTop: 5 }]}>
              <Text style={[styles.recieptnavtxt, { width: '25%' }]}>Date</Text>
              <View style={[styles.verticalline, { borderColor: 'darkblue' }]}></View>

              <Text style={[styles.recieptnavtxt, { width: '50%' }]}>Amount</Text>
              <View style={[styles.verticalline, { borderColor: 'darkblue' }]}></View>

              <Text style={[styles.recieptnavtxt, { width: '25%' }]}>Mode of payment</Text>
            </View>
          </View>
          {invoicesList.map((value, i) => {
            return (
              <View key={i} style={styles.tbllist}>
                <Left style={{ flex: 1 }}>
                  <Text style={{ color: 'darkblue', alignSelf: 'flex-end', fontSize: 10 }}>
                    {value.date}
                  </Text>
                </Left>
                <Body style={{ flex: 3 }}>
                  <Text style={{ color: 'darkblue' }}>{'$' + value.amount}</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Text style={{ color: 'darkblue', alignSelf: 'flex-start' }}>{value.mode}</Text>
                </Right>
              </View>
            );
          })}
        </ScrollView>
        <Footer />
      </SafeAreaView>
    );
  }
}