import { combineReducers } from 'redux'
import stickynotes from './stickynotes'
import nextId from './nextId'

const rootReducer = combineReducers({
    stickynotes,
    nextId
});

export default rootReducer;