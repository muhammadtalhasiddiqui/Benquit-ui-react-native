import React from 'react';
import { StatusBar, View, Platform } from 'react-native';
import MainNavigator from './Navigations/StackNavigator';
import NavigationService from './NavigationService'

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={'#7d07c4'} />
        <MainNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }} />
      </View>
    )
  }
}

export default App;