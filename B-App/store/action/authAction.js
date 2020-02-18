import { AuthConst } from "../constants";
import axios from "axios";
import NavigationService from "../../NavigationService";
import AsyncStorage from '@react-native-community/async-storage';

export function signup(param) {
    console.log(param, 'paaaa')
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    const data = `name=${param.name}&email=${param.email}&password=${param.password}&contact=${param.contact}&action=signup`
    return dispatch => {
        dispatch({
            type: AuthConst.PROGRESS, payload: true
        })
        axios.post('http://www.hnhtechsolutions.com/waqarkhan/singup.php', data, {
            headers: headers
        })
            .then(resp => {
                console.log('json', resp)
                if (resp.data.status === true) {
                    dispatch({ type: AuthConst.SIGNUP, payload: resp })
                    NavigationService.navigate('Login');
                } else {
                    dispatch({
                        type: AuthConst.ERROR
                    })
                }
            }).catch(err => console.log('error', err))
    }
}

export function login(param) {
    console.log(param, 'login')
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    const data = `email=${param.email}&password=${param.password}&action=login`
    return dispatch => {
        dispatch({
            type: AuthConst.PROGRESS, payload: true
        })
        axios.post('http://www.hnhtechsolutions.com/waqarkhan/singup.php', data, {
            headers: headers
        })
            .then(resp => {
                console.log('json', resp)
                if (resp.data.status === true) {
                    dispatch({ type: AuthConst.LOGIN, payload: resp.data.user })
                    if (param.email === "admin@gmail.com") {
                        NavigationService.navigate('Admin');
                    } else {
                        NavigationService.navigate('App');
                    }
                } else {
                    console.log('else', resp.data.status)
                    dispatch({ type: AuthConst.ERROR, payload: false })
                }
            }).catch(err => console.log('error', err))
    }
}

export function send_pin(email) {
    console.log(email, 'paaaa')
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    const data = `email=${email}&action=forget_password`
    return dispatch => {
        dispatch({
            type: AuthConst.PROGRESS, payload: true
        })
        axios.post("http://www.hnhtechsolutions.com/waqarkhan/forget_password_api.php", data, {
            headers: headers
        })
            .then(resp => {
                console.log('json', resp)
                if (resp.data.status === true) {
                    dispatch({ type: AuthConst.FORGET_PASSWORD, payload: resp })
                    // NavigationService.navigate('Login');
                } else {
                    dispatch({
                        type: AuthConst.ERROR
                    })
                }
            }).catch(err => console.log('error', err))
    }
}

export function change_password(param) {
    console.log(param, 'paaaa')
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    const data = `email=${param.email}&password=${param.newPassword}&token=${param.pinCode}&action=forgot_password_submit`

    return dispatch => {
        dispatch({
            type: AuthConst.PROGRESS, payload: true
        })
        axios.post("http://www.hnhtechsolutions.com/waqarkhan/forget_password_api.php", data, {
            headers: headers
        })
            .then(resp => {
                console.log('json', resp)
                if (resp.data.status === true) {
                    dispatch({ type: AuthConst.FORGET_PASSWORD })
                    NavigationService.navigate('Login');
                } else {
                    dispatch({
                        type: AuthConst.ERROR
                    })
                }
            }).catch(err => console.log('error', err))
    }
}

export function clearSession() {
    return dispatch => {
        AsyncStorage.removeItem("user")
            .then(res => {
                console.log(res, "logout res")
                dispatch({ type: AuthConst.LOGOUT })
                NavigationService.navigate("Auth")
            })
    }
}