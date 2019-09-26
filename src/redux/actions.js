export function fetchEvents() {
    return dispatch => {
        return fetch('http://localhost:4000/events')
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