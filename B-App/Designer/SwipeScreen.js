import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, StyleSheet } from "react-native";
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';


const cards = [
    {
        text: 'Card One',
        name: 'One',
        image: require('../assets/handbag.jpg'),
    }, {
        text: 'Card One',
        name: 'One',
        image: require('../assets/handbag2.jpg'),
    }, {
        text: 'Card One',
        name: 'One',
        image: require('../assets/handbag3.jpg'),
    },
    
];
export default class DeckSwiperExample extends Component {
    render() {
        return (
            <View style={{ justifyContent: "center", alignContent: "center" }}>
                <Text style={{ textAlign: "center", marginVertical: 20 }}>If you like it - swipe right it</Text>
                <View>
                    <View style={{ width: "80%", height: 2, backgroundColor: "gray", alignSelf: "center" }} />
                    <DeckSwiper
                        dataSource={cards}
                        renderItem={item =>
                            <Card style={{ elevation: 0 }}>
                                <CardItem cardBody>
                                    <Image resizeMode="contain" style={{ height: 300, flex: 1 }} source={item.image} />
                                </CardItem>
                                <View style={{ flexDirection: "column" }}>
                                    <Button style={[style.btnStyle, { width: "90%" }]} dark><Text style={{ textAlign: "center" }} > Item: {item.name} - Price $X </Text></Button>
                                    <Button style={[style.btnStyle, { width: "60%" }]}  onPress={() => this.props.navigation.navigate("outfit")} dark><Text>Bulid Outfit</Text></Button>
                                    <Button style={[style.btnStyle, { width: "40%" }]} dark><Text>Undo</Text></Button>
                                </View>
                            </Card>
                        }
                    />
                </View>
            </View>
        );
    }
}


const style = StyleSheet.create({
    btnStyle: {
        marginVertical: 10,
        alignSelf: "center",
        justifyContent: "center"
    }
})