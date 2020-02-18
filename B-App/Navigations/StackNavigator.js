import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LandingPage from "../Designer/LandingPage";
import SelectExplore from "../Designer/select";
import DeckSwiperExample from "../Designer/SwipeScreen";
import OutfitScreen from "../Designer/Outfit";
import Basket from "../Designer/Basket";

import Home from '../Screens/Home';
import MyEvents from '../Screens/MyEvents';
// import UserCate from '../Screens/Jeeps/used-cate';
// import VehicleIntake from '../Screens/Jeeps/vehicle_intake';
// import CustomInput from '../Screens/Jeeps/CustomInput';
import PaymentTrial from '../Screens/PaymentTrial';
import userHome from '../Screens/user/userHome';
import PlanetDetail from '../Screens/user/PlanetDetail';
import bookingPanel from '../Screens/user/bookingPanel';
import userNotifications from '../Screens/user/userNotifications';
import login from '../Screens/admin/login';
import forgotpassowrd from '../Screens/admin/forgotpassowrd';
import SignUpForm from '../Screens/admin/signup';
import myplanets from '../Screens/admin/myplanets';
import createnewplanet from '../Screens/admin/createnewplanet';
import CheckSession from "../Screens/Components/CheckSession";
// import { ActiveLoader } from '../Screens/Components/Loader';
// import pickLocation from '../Screens/admin/Components/pickLocation';


const AuthNavigator = createStackNavigator({
  Login: login,
  Signup: SignUpForm,
  ForgotPassowrd: forgotpassowrd
}, {
  headerMode: "none",
  initialRouteName: "Login"
})

const AppNavigator = createStackNavigator(
  {
  
    Home,
    userNotifications,
    MyEvents,
    PaymentTrial,
    userHome,
    PlanetDetail,
    bookingPanel,
    myplanets
  },
  {
    headerMode: 'none',
    initialRouteName: 'userHome'
  },
);

const AdminNavigator = createStackNavigator(
  {
    myplanets,
    createnewplanet,
    PlanetDetail,
  },
  {
    headerMode: 'none',
    initialRouteName: 'createnewplanet'
  },
);



const SwitchNavigator = createSwitchNavigator({
  CheckSession: CheckSession,
  Auth: AuthNavigator,
  Admin: AdminNavigator,
  App: AppNavigator
})

export default createAppContainer(SwitchNavigator);
