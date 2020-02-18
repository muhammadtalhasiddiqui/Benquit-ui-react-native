import React from 'react';
import {
  View,
  Text,
  Dimensions,
  BackHandler,
  Alert,
  TouchableOpacity,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../Screens/Home';
import StackNavigator from '../Navigations/StackNavigator';

class MyAccount extends React.Component {
  static navigationOptions = {
    drawerLabel: 'My Account',
    drawerIcon: <Icon name="md-contacts" color="grey" size={20} />,
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Account Screen</Text>
      </View>
    );
  }
}

class MyCart extends React.Component {
  static navigationOptions = {
    drawerLabel: 'My Cart',
    drawerIcon: <Icon name="md-cart" color="grey" size={20} />,
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Cart Screen</Text>
      </View>
    );
  }
}

class Orders extends React.Component {
  static navigationOptions = {
    drawerLabel: 'My Orders',
    drawerIcon: <Icon2 name="clipboard-text" color="grey" size={20} />,
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Orders Screen</Text>
      </View>
    );
  }
}

class Wallet extends React.Component {
  static navigationOptions = {
    drawerLabel: 'VendiCash Wallet',
    drawerIcon: <Icon3 name="money" color="grey" size={20} />,
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Wallet Screen</Text>
      </View>
    );
  }
}

class About extends React.Component {
  static navigationOptions = {
    drawerLabel: 'About',
    drawerIcon: <Icon3 name="info" color="grey" size={20} />,
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>About Screen</Text>
      </View>
    );
  }
}

class Signout extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Logout',
    drawerIcon: <Icon2 name="logout" color="grey" size={20} />,
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Logout Screen</Text>
      </View>
    );
  }
}

const _alert = () => {
  Alert.alert('', 'Exit App ?', [
    {text: 'Cancel', onPress: () => {}},
    {text: 'Exit', onPress: () => BackHandler.exitApp()},
  ]);
};

HomeScreen.navigationOptions = {
  drawerLabel: () => null,
};

const Drawerheader = props => (
  <View>
    <View
      style={{
        height: Dimensions.get('screen').height / 4,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 50,
          fontFamily: 'cursive',
          fontWeight: 'bold',
        }}>
        VenDi
      </Text>
    </View>
    <DrawerItems {...props} />
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        width: '100%',
        height: 40,
        alignItems: 'center',
      }}
      onPress={_alert}>
      <View>
        <Icon
          name="md-close"
          style={{marginHorizontal: 20}}
          color="grey"
          size={20}
        />
      </View>
      <Text
        style={{
          color: 'grey',
          fontWeight: 'bold',
          marginHorizontal: 20,
        }}>
        Exit
      </Text>
    </TouchableOpacity>
  </View>
);

const drawer = createDrawerNavigator(
  {
    StackNavigator: {
      screen: StackNavigator,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
    HomeScreen,
    MyAccount,
    MyCart,
    Orders,
    Wallet,
    About,
    Signout,
  },
  {
    drawerWidth: 250,
    contentOptions: {
      labelStyle: {color: 'grey'},
    },
    contentComponent: Drawerheader,
  },
);

const DrawerNavigator = createAppContainer(drawer);
export default DrawerNavigator;
