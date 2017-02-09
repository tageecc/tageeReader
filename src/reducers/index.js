import {combineReducers} from 'redux';
import readerReducer from './reader';

export default combineReducers({
    readerStore:readerReducer
})