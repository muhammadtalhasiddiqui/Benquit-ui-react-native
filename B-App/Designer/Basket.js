import React, { Component } from 'react';
import { Image, View, FlatList, ScrollView } from 'react-native';
import { CardItem, CheckBox, Text, Left, Body, Right, Button } from 'native-base';


const cards = [
    {
        text: 'Card One',
        name: 'One',
        image: require('../assets/handbag.jpg'),
        cheked: true
    }, {
        text: 'Card One',
        name: 'One',
        image: require('../assets/handbag2.jpg'),
        cheked: false
    }, {
        text: 'Card One',
        name: 'One',
        image: require('../assets/handbag3.jpg'),
        cheked: false
    }
];

export default class Basket extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{paddingVertical: 20}}>
                    <Text style={{ textAlign: "center" }}>Your Basket</Text>
                    <Button style={{ width: "25%", marginVertical: 10, alignSelf: "center", justifyContent: "center" }} onPress={() => this.props.navigation.goBack()} dark><Text style={{ fontWeight: "800" }}>Back</Text></Button>
                </View>
                <FlatList
                    data={cards}
                    contentContainerStyle={{ width: '100%', }}
                    renderItem={({ item }) =>
                        <CardItem style={{ backgroundColor: "#fff", height: 160 }}>
                            <Left style={{ padding: 0 }}>
                                <Image source={item.image} resizeMode="contain" style={{ height: 200, width: null, flex: 1 }} />
                            </Left>
                            <Body style={{ justifyContent: "flex-start", backgroundColor: "#fff", alignSelf: "center", alignItems: "flex-start", paddingHorizontal: 20 }}>
                                <Text>Brand: Versace</Text>
                                <Text>Item: T-Shirt</Text>
                                <Text>Price: $49.00</Text>
                            </Body>
                            <Right style={{ alignItems: "center" }}>
                                <CheckBox checked={item.cheked} color="#000" />
                            </Right>
                        </CardItem>
                    }
                />
                <Button style={{ width: "60%", marginVertical: 20, alignSelf: "center", justifyContent: "center" }} dark><Text style={{ fontWeight: "800" }}>Basket</Text></Button>
            </ScrollView>
        );
    }
}