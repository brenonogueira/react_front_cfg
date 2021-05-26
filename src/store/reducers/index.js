import { combineReducers } from 'redux';
import configReducer from './configReducer'
import userReducer from './userReducer'

export default combineReducers({
    configReducer,
    userReducer
})