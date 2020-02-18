import React from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export default class CheckSession extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        AsyncStorage.getItem("user").then((res) => {
            console.log(res)
            if (res !== null) {
                const u = JSON.parse(res)
                console.log(u)
                console.log(u.email, 'eemaa')
                if (u.email === "admin@gmail.com") {
                    this.props.navigation.navigate("Admin")
                } else {
                    this.props.navigation.navigate("App")
                }
            } else {
                this.props.navigation.navigate("Auth")
            }
        })
        // const user = AsyncStorage.removeItem("user")
    }
    render() {
        return (
            <View>
                <ActivityIndicator style={{ alignSelf: "center" }} size={40} color="#0000ff" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headView: { height: 40, marginTop: 10, paddingLeft: 20 },
    rView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    to: {
        backgroundColor: 'white',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 3,
        // marginLeft: Dimensions.get('screen').width - 220,
    },
    gradient: {
        flex: 0.97,
        flexDirection: 'row',
        alignItems: 'center',
        paddingEnd: 20
    },
    gView: {
        borderStyle: 'solid',
        borderRightWidth: 12,
        borderTopWidth: 40,
        borderTopColor: 'white',
        borderRightColor: 'transparent',
        flex: 0.1
    },
    title: { color: 'white' },
});
