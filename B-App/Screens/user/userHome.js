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
  Modal,

} from 'react-native';
import Footer from '../Components/Footer';
import Header from '../Components/header';
import { Form, Item, Label, Input, Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const defaultColor = '#7d07c4'
const colors = ['#7d07c4', '#aa068e'];


export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {

  }
  goto = (screen) => {
    // this.props.navigation.navigate('userNotifications')
    alert('yuff')
  }
  render() {
    let data = [
      {
        id: 1,
        src: 'https://s3.envato.com/files/248952681/preview.jpg',
        banqName: 'Pearl Banquet',
        capacity: '500'
      },
      {
        id: 2,
        src: 'https://s3.envato.com/files/248952681/preview.jpg',
        banqName: 'Paradise Banquet',
        capacity: '300'
      }]
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient colors={colors}>
          {/* <StatusBar barStyle={'light-content'} backgroundColor={'#b00589'} /> */}
          <View
            style={{
              height: 65,
              flexDirection: 'row',
              marginHorizontal: 20,
          
              // alignSelf:'center',
              justifyContent: 'space-between'
            }}>

            
              <Text style={{fontSize: 28,marginLeft:'20%',marginTop:15, color: 'white' }}>
                Home
              </Text>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('userNotifications')}}>
                <Icon style={{color:'red',width:40,marginVertical:20}} name='md-notifications' />
              </TouchableOpacity>
         
          </View>
        </LinearGradient>
        {/* <Header title='Home' gotoNotify={()=>{this.props.navigation.navigate('userNotifications')}}/> */}
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
          <View style={styles.searchBarMain}>
            <Input style={styles.searchBar} placeholder='Search Planet' placeholderTextColor='grey' />
            <Ionicons name='md-search' size={28} color={defaultColor} />
          </View>

          <FlatList
            data={data}
            renderItem={({ item, i }) =>
              // data.map((item,i) => {
              // return(
              <View style={{ marginBottom: 10 }} key={i}>
                <Image style={{ width: '100%', height: 170 }} source={{ uri: item.src }} />
                <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'space-between' }}>
                  <View>
                    <Text style={styles.bigTxt}>{item.banqName}</Text>
                    <Text>Capacity {item.capacity} psn</Text>
                  </View>
                  <TouchableOpacity style={styles.seeMore} onPress={() => this.props.navigation.navigate('PlanetDetail', { name: item.banqName })}>
                    <Text style={styles.seeMoreTxt}>See More</Text>
                  </TouchableOpacity>
                </View>
              </View>
              //   )
              // })}
            }
            keyExtractor={item => item.id.toString()}
          />

        </ScrollView>

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
  searchBarMain: {
    width: "90%",
    height: 50,
    padding: 15,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center'
  }, searchBar: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'lightgrey'
  },
  seeMore: {
    backgroundColor: defaultColor,
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  seeMoreTxt: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white'
  }
});
