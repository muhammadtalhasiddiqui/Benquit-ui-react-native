import React, { Component } from 'react';
import { View, StyleSheet } from "react-native";
import { Container, Header, Content, Button, Text } from 'native-base';


export default class LandingPage extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                <Text note>Welcome to</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 40 }}>Get Me The Designer</Text>
                <Button style={{ width: "50%", marginVertical: 10, alignSelf: "center", justifyContent: "center" }} onPress={() => this.props.navigation.navigate("selectX")} dark><Text style={{ textAlign: "center", textTransform: "lowercase" }}></Text></Button>
                <Button style={{ width: "50%", marginVertical: 10, alignSelf: "center", justifyContent: "center" }} dark><Text style={{ textAlign: "center" }}> Game </Text></Button>
            </View>
        );
    }
}


  