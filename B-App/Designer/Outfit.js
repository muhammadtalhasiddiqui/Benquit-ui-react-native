import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, StyleSheet, ScrollView } from "react-native";
import Swiper from "react-native-swiper";
import { Button, Text } from 'native-base';

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
    }
];
export default class OutfitScreen extends Component {
    render() {
        return (
            <ScrollView>
                <Button style={{ width: "25%", marginVertical: 20, alignSelf: "center", justifyContent: "center" }} onPress={() => this.props.navigation.navigate("basket")} dark><Text style={{fontWeight: "800"}}>Basket</Text></Button>
                <View style={style.swiperStyle}>
                    <Swiper
                        scrollEnabled={false}
                        showsButtons={true}
                        buttonWrapperStyle={{ color: "#fff", borderRadius: 10, height: 80 }}
                        showsPagination={false}
                        style={{ borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                        {cards.map((cd) => {
                            return (
                                <View style={style.imgStyle}>
                                    <Image resizeMode="cover" style={{ height: 100, width: '80%', alignSelf: 'center' }} source={cd.image} />
                                </View>
                            )
                        })}
                    </Swiper>
                </View>

                <View style={style.swiperStyle}>
                    <Swiper
                        scrollEnabled={false}
                        showsButtons={true}
                        buttonWrapperStyle={{ color: "#fff", height: 80 }}
                        showsPagination={false}
                        style={{ borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                        {cards.map((cd) => {
                            return (
                                <View style={{ justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "#000" }}>
                                    <Image style={{ height: 100, width: '80%', alignSelf: 'center' }} source={cd.image} />
                                </View>
                            )
                        })}
                    </Swiper>
                </View>

                <View style={style.swiperStyle}>
                    <Swiper
                        scrollEnabled={false}
                        showsButtons={true}
                        showsPagination={false}
                        buttonWrapperStyle={{ color: "#fff", height: 80}}
                        style={{ borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                        {cards.map((cd) => {
                            return (
                                <View style={{ justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "#000" }}>
                                    <Image style={{ height: 100, width: '80%', alignSelf: 'center' }} source={cd.image} />
                                </View>
                            )
                        })}
                    </Swiper>
                </View>
                <View style={{ justifyContent: "space-between", flexDirection: "row", padding: 10, marginVertical: 20 }}>
                    <Button style={{ width: "20%", justifyContent: "center" }} dark><Text style={{textTransform: "capitalize"}}>Share</Text></Button>
                    <Button style={{ width: "20%", justifyContent: "center" }} onPress={()=> this.props.navigation.goBack()} dark><Text style={{textTransform: "capitalize"}}>Back</Text></Button>
                </View>
            </ScrollView>
        );
    }
}

const style = StyleSheet.create({
    btnStyle: {
        marginVertical: 10,
        alignSelf: "center",
        justifyContent: "center"
    },
    swiperStyle: {
        height: 100,
        width: "80%",
        alignContent: "center",
        alignSelf: "center",
        marginVertical: 30,
        padding: 5
    },
    imgStyle: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#000"
    }
})








