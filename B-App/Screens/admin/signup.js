import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Footer from '../Components/Footer';
import { Form, Item, Label, Input } from 'native-base';
import { connect } from "react-redux";
import { signup } from "../../store/action/authAction";
import { ActiveLoader } from '../Components/Loader';


const gColors = ['#7d07c4', '#aa068e'];
const placeholderColor = 'grey'

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      contact: ""
    }
  }

  componentDidMount() {

  }

  submitForm = () => {
    const { name, email, password, contact } = this.state
    if (name && email && password && contact) {
      const data = { name, email, password, contact }
      console.log(true)
      this.props.submit(data)
    } else {
      console.log(false)
    }
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ padding: 15 }}>
          <Image style={styles.imglogo} source={require('../../assets/logo.png')} />
          <Item style={styles.inputMain}>
            <Input placeholder="Name" onChangeText={(name) => this.setState({ name })} style={styles.inputTxt} placeholderTextColor={placeholderColor} />
          </Item>
          <Item style={styles.inputMain}>
            <Input style={styles.inputTxt} onChangeText={(email) => this.setState({ email })} keyboardType="email-address" placeholder='Email' placeholderTextColor={placeholderColor} />
          </Item>

          <Item style={styles.inputMain}>
            <Input style={styles.inputTxt} onChangeText={(password) => this.setState({ password })} secureTextEntry={true} placeholder='Password' placeholderTextColor={placeholderColor} />
          </Item>

          <Item style={styles.inputMain}>
            <Input style={styles.inputTxt} onChangeText={(contact) => this.setState({ contact })} keyboardType="phone-pad" placeholder='Contact' placeholderTextColor={placeholderColor} />
          </Item>

          {
            this.props.progress ? <View style={{ marginVertical: 20 }}>
              <ActiveLoader />
            </View> :
              <TouchableOpacity onPress={this.submitForm}>
                <Text style={[styles.bigTxt, { marginTop: 30, alignSelf: 'center' }]}>Sign Up</Text>
              </TouchableOpacity>
          }

        </ScrollView>
        {/* <Footer /> */}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    progress: state.authReducer.progress,
    error: state.authReducer.error
  }
}

let mapDispatchToPops = dispatch => {
  return {
    submit: (data) => {
      dispatch(signup(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToPops)(SignUpForm)

const styles = StyleSheet.create({
  inputMain: {
    borderBottomColor: gColors[0],
    height: 50,
    marginTop: 25,
    marginLeft: 0,
    borderBottomWidth: 1,
  },
  imglogo: {
    width: 250,
    height: 150,
    alignSelf: 'center',
    marginTop: '10%'
  },
  inputTxt: {
    fontWeight: 'bold',
    fontSize: 16
  },
  bigTxt: {
    color: gColors[0],
    fontWeight: 'bold',
    fontSize: 20,
    textDecorationLine: 'underline'
  },
  modalMain: {
    backgroundColor: 'rgba(0,0,0,.6)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gradientModal: {
    width: '50%',
    height: '30%',
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 35,
    justifyContent: 'center'
  },
  flexContainerModal: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  modalText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  modalBtn: {
    textDecorationLine: 'underline',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  }
});
