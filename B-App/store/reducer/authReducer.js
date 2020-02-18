import { AuthConst } from "../constants";
import AsyncStorage from '@react-native-community/async-storage';


const INITAIL_STATE = {
    progress: false,
    error: false,
    user: undefined,
    forgetPassword: false
}

const authReducer = (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case AuthConst.PROGRESS:
            return { ...state, progress: true, error: false, user: undefined, forgetPassword: false }
            break;
        case AuthConst.ERROR:
            console.log(action.payload, 'error')
            return { ...state, error: true, progress: action.payload }
            break;
        case AuthConst.LOGOUT:
            console.log(action.payload, 'error')
            return { ...state, error: false, progress: false, user: undefined }
            break;
        case AuthConst.SIGNUP:
            console.log(action.payload)
            return { ...state, progress: false, error: false }
            break;
        case AuthConst.LOGIN:
            console.log(action.payload)
            AsyncStorage.setItem("user", JSON.stringify(action.payload))
            return { ...state, progress: false, error: false, user: action.payload }
            break;
        case AuthConst.FORGET_PASSWORD:
            console.log(action.payload)
            return { ...state, forgetPassword: true, error: false, progress: false }
            break;
        default:
            return state
    }
}

export default authReducer;

