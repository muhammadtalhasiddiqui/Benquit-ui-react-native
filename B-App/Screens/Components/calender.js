import React from 'react';
import { Calendar } from "react-native-calendars";
import { Modal, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const today = new Date();
const colors = ['#7d07c4', '#aa068e'];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export default class Calender extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            day: today.getDate(),
            mon: months[today.getMonth()],
            year: today.getFullYear(),
            daymarked: `2019-12-10`,
        }
    }
    setDate = date => {
        let month;
        if (date.month <= 10) {
            month = `0${date.month}`;
        } else month = date.month;
        this.setState({
            day: date.day,
            mon: months[date.month - 1],
            year: date.year,
            daymarked: `${date.year}-${month}-${date.day}`,
        });
    };
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.visible}
                onRequestClose={() => {
                    this.props.invisible(false)
                }}
            >
                <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,.5)'}}>
                <Calendar
                    markedDates={{
                        [this.state.daymarked]: {
                            customStyles: {
                                container: {
                                    backgroundColor: colors[0],
                                    borderRadius: 25,
                                    width: 30,
                                },
                                text: {
                                    color: 'white',
                                    // fontWeight: 'bold',
                                },
                            },
                        },
                    }}
                    markingType={'custom'}
                    style={{
                        paddingHorizontal: 0,width:'80%',height:'50%',borderRadius:10
                    }}
                    theme={{
                        'stylesheet.calendar.header': {
                            week: {
                                backgroundColor: colors[0],
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                height: 32,
                                alignItems: 'center',
                                borderRadius: 3,color:'white'
                            },
                        },
                    }}
                    renderArrow={direction =>
                        direction == 'left' ? (
                            <Icon name="ios-arrow-back" size={20} />
                        ) : (
                                <Icon name="ios-arrow-forward" size={20} />
                            )
                    }
                    onDayPress={day => this.setDate(day)}
                />
                </View>
            </Modal>
        )
    }
}