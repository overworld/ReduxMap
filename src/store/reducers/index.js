import {connectRouter} from "connected-react-router";
import {combineReducers} from 'redux'
import {text} from './text';
import {point} from './point';

export default (history) => combineReducers({
    text,
    point,
    router: connectRouter(history)
})