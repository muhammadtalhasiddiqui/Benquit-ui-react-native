/**
 * @format
 */
import React, { Component, Fragment } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { YellowBox } from 'react-native';

// redux store 
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './store/reducer/index'

YellowBox.ignoreWarnings(['Warning: ...']);
console.disableYellowBox = true;
const store = createStore(allReducers, {}, applyMiddleware(thunk))

class MainApplication extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => MainApplication);
