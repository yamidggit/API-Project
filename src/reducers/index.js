import { combineReducers } from 'redux';
import appState from './reducer';
import {reducer as form } from 'redux-form';

export default combineReducers({
   form, appState
});