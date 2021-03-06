import {combineReducers} from 'redux'
import {
    FETCH_EVENTS_SUCCESS,
    TOGGLE_MODAL,
    ADD_EVENT,
    SEARCH_INPUT,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_USERS_SUCCESS,
    FETCH_EVENT_ATTENDEES_SUCCESS,
    FETCH_EVENT_CREATORS_SUCCESS
} from './actions.js'

const initialState = {
    events: [],
    active: false,
    categories: [],
    eventAttendees: [],
    eventCreators: []
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

function eventAttendeesReducer(state = initialState.eventAttendees, action) {
    if (action.type === FETCH_EVENT_ATTENDEES_SUCCESS) {
        return action.event_attendees
    }
    return state
}

function eventCreatorsReducer(state = initialState.eventCreators, action) {
    if (action.type === FETCH_EVENT_CREATORS_SUCCESS) {
        return action.event_creators
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

function categoriesReducer(state = initialState.categories, action) {
    if (action.type === FETCH_CATEGORIES_SUCCESS) {
        return action.categories
    }
    return state
}

const rootReducer = combineReducers({
    events: eventsReducer,
    active: modalReducer,
    search: searchReducer,
    categories: categoriesReducer,
    eventCreators: eventCreatorsReducer,
    eventAttendees: eventAttendeesReducer
})

export default rootReducer