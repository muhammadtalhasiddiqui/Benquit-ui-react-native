import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import Footer from '../Components/Footer';
import Header from '../Components/header';
import { Button, Icon, Segment, Content } from 'native-base';

const defaultColor = '#7d07c4'

export default class userNotifications extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {

  }
  render() {
    let data = [
      {
        id: 1,
        src: 'https://s3.envato.com/files/248952681/preview.jpg',
        title: 'Check out our App of the day!',
        time: 'Sponsored'
      },
      {
        id: 2,
        src: 'https://s3.envato.com/files/248952681/preview.jpg',
        title: 'Invite friends and earn many credits.',
        time: '2 days ago'
      }]
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header title='Notifications' />
        <Segment style={{ backgroundColor: "#eee", justifyContent: "center", marginHorizontal: 20 }}>
          <Button first style={{borderEndColor: "black", borderRightWidth: 2, padding: 20}}>
            <Text>Latest</Text>
          </Button>
          <Button style={{borderEndColor: "black", borderRightWidth: 2, padding: 20}}>
            <Text>Accepted</Text>
          </Button>
          <Button last style={{ padding: 20}} active>
            <Text>Decline</Text>
          </Button>
        </Segment>
        <FlatList
          data={data}
          renderItem={({ item, i }) =>
            <View
              style={{ paddingHorizontal: 15 }}>
              <View style={{ flexDirection: 'row', paddingVertical: 15, alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flex: 1 }}>
                  <Image source={require('../../assets/appointment.png')} style={{ width: 35, height: 35 }} />
                </View>

                <View style={{ flexDirection: 'column', flex: 4 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 13 }}>{item.title}</Text>
                  <Text style={{ color: 'grey', fontSize: 12 }}>{item.time}</Text>
                </View>

                <View style={{ flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'green', textDecorationLine: 'underline' }}>View</Text>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'red' }}>Decline</Text>
                </View>
              </View>

              <View style={styles.horizonline} />

            </View>
          }
          keyExtractor={item => item.id}
        />
        <Footer />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  bigTxt: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  horizonline: {
    borderColor: 'lightgrey',
    borderWidth: 0.5,
    borderRadius: 8,
    width: '85%',
    alignSelf: 'flex-end',
  },
});
