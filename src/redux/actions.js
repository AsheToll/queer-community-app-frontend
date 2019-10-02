import {authHeader} from '../_helpers/auth-header.js'

///////////
// USERS //
///////////
export function fetchUsers() {
    return dispatch => {
        return fetch('http://localhost:4000/users', {
            headers: authHeader()
        })
        .then(resp => resp.json())
        .then(users => {
            dispatch(fetchUsersSucess(users))
        })
    }
}

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'

export function fetchUsersSucess(users) {
    return {
        type: FETCH_USERS_SUCCESS,
        users
    }
}

export function registerUser(user) {
    return dispatch => {
        return fetch('http://localhost:4000/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }
}

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'

export function login(username, password) {
    return dispatch => {
        return fetch('http://localhost:4000/users/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(username, password)
        })
        .then(resp => resp.json())
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user))

            return user
        })
    }
}

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'

export function logout() {
    localStorage.removeItem('user')
}

export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'

////////////
// EVENTS //
////////////
export function fetchEvents() {
    return dispatch => {
        return fetch('http://localhost:4000/events', {
            headers: authHeader()
        })
        .then(resp => resp.json())
        .then(events => {
            dispatch(fetchEventsSuccess(events))
        })
    }
}

export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS'

export function fetchEventsSuccess(events) { // receive_posts
    return {
        type: FETCH_EVENTS_SUCCESS,
        events
    }
}

////////////////////////////////
// EVENT ATTENDEES & CREATORS //
////////////////////////////////
export function fetchEventCreators() {
    return dispatch => {
        return fetch('http://localhost:4000/event_creators', {
            headers: authHeader()
        })
        .then(resp => resp.json())
        .then(event_creators => {
            dispatch(fetchEventCreatorsSuccess(event_creators))
        })
    }
}

export const FETCH_EVENT_CREATORS_SUCCESS = 'FETCH_EVENT_CREATORS_SUCCESS'

export function fetchEventCreatorsSuccess(event_creators) { // receive_posts
    return {
        type: FETCH_EVENT_CREATORS_SUCCESS,
        event_creators
    }
}

export function fetchEventAttendees() {
    return dispatch => {
        return fetch('http://localhost:4000/event_attendees', {
            headers: authHeader()
        })
        .then(resp => resp.json())
        .then(event_attendees => {
            dispatch(fetchEventAttendeesSuccess(event_attendees))
        })
    }
}

export const FETCH_EVENT_ATTENDEES_SUCCESS = 'FETCH_EVENT_ATTENDEES_SUCCESS'

export function fetchEventAttendeesSuccess(event_attendees) { // receive_posts
    return {
        type: FETCH_EVENT_ATTENDEES_SUCCESS,
        event_attendees
    }
}

/////////////////
// CATEGORIES //
////////////////
export function fetchCategories() {
    return dispatch => {
        return fetch('http://localhost:4000/categories', {
            headers: authHeader()
        })
        .then(resp => resp.json())
        .then(categories => {
            dispatch(fetchCategoriesSuccess(categories))
        })
    }
}

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'

export function fetchCategoriesSuccess(categories) { // receive_posts
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        categories
    }
}
////////////
// MODAL //
///////////
export const TOGGLE_MODAL = 'TOGGLE_MODAL'

export function toggleModal() {
    return {
        type: TOGGLE_MODAL,
        active: !this.state.active
    }
}

export function createEvent() {
    let event = {
        name: document.querySelector('.event-name').value,
        image: document.querySelector('.event-image').value,
        description: document.querySelector('.event-description').value
    }
    return dispatch => {
        return fetch('http://localhost:4000/events', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({event})
        })
        .then(response => response.json())
        .then(event => {dispatch(addEvent(event))})
    }
}

export const ADD_EVENT = 'ADD_EVENT'

export function addEvent(event) {
    return {
        type: ADD_EVENT,
        event
    }
}
////////////
// SEARCH //
////////////
export const SEARCH_INPUT = 'SEARCH_INPUT'

export function searchInput(value) {
    return {
        type: SEARCH_INPUT,
        value
    }
}

// // User selects, or clicks on an event to see the show page
// // Actions governed by user interaction
// export const VIEW_EVENT = 'VIEW_EVENT'

// function viewEvent(event) {
//     return {
//         type: VIEW_EVENT,
//         event
//     }
// }
// // Another kind of action governed by network requests
// // fetch in response to route change?
// export const REQUEST_EVENT = 'REQUEST_EVENT'

// function requestEvent(event) {
//     return {
//         type: REQUEST_EVENT,
//         event
//     }
// }

// // When the network request comes through,
// // dispatch RECEIVE_EVENT
// export const RECEIVE_EVENT = 'RECEIVE_EVENT'

// function receiveEvent(event) {
//     return {
//         type: RECEIVE_EVENT,
//         event: event
//         // posts: json.data.children.map(event => event.data) pass json is as second arg
//     }
// }