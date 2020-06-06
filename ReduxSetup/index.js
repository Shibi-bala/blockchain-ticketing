import walletReducer from './walletReducer';
import loggedReducer from './loggedReducer'
import {combineReducers} from 'redux';



const allReducers = combineReducers({
    wallet : walletReducer,
    isLogged : loggedReducer
});

export default allReducers;