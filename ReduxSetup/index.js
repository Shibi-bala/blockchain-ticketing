import walletReducer from './walletReducer';
import loggedReducer from './loggedReducer';
import authReducer from './authReducer';
import {combineReducers} from 'redux';



const allReducers = combineReducers({
    wallet : walletReducer,
    isLogged : loggedReducer,
    isAuth: authReducer
});

export default allReducers;