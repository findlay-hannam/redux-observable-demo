import { combineReducers } from 'redux';
import ping from './pingReducer';
import drag from './dragReducer';

export default combineReducers({ ping, drag });