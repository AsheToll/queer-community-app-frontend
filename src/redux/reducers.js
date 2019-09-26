import {combineReducers} from 'redux'
import {
    FETCH_EVENTS_SUCCESS,
    TOGGLE_MODAL,
    ADD_EVENT,
    SEARCH_INPUT
} from './actions.js'

const initialState = {
    events: [],
    active: false
}

function eventsReducer(state = initialState.events, action) {
    if (action.type === FETCH_EVENTS_SUCCESS) {
        return action.events
    } else if (action.type === ADD_EVENT) {
        return [
            ...state.filter(event => event.id !== action.event.id),
            action.event
        ]
    }
    return state
}

function modalReducer(state = initialState.active, action) {
    if (action.type === TOGGLE_MODAL) {
        return action.active
    }
    return state
}

function searchReducer(state = '', action) {
    if (action.type === SEARCH_INPUT) {
        return action.value
    }
    return state
}

const rootReducer = combineReducers({
    events: eventsReducer,
    active: modalReducer,
    search: searchReducer
})

export default rootReducer