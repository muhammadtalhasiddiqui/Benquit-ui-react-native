import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Container, Header, Content, Button, Text } from 'native-base';


export default class SelectExplore extends Component {
    // state = {
    //     activePref: 0
    // }
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <Text style={{ textAlignVertical: "center", textAlign: "center", marginVertical: 30, marginBottom: 20 }}>Please Select your preference</Text>
                <View style={{ flexDirection: "row", justifyContent: "center", alignContent: "center", }}>
                    <TouchableOpacity style={{ width: "40%" }} onPress={() => this.props.navigation.navigate("swipe")}>
                        <Image source={require('../assets/male.jpg')} style={{ width: null, height: 540, marginHorizontal: 15 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: "40%", backgroundColor: "transparent" }}  onPress={() => this.props.navigation.navigate("swipe")}>
                        <Image source={require('../assets/lady.jpg')} style={{ width: null, height: 480, marginTop: 20, marginHorizontal: 15 }} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}