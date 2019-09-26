import {fetchEvents, loadingEvents} from './actions.js'

function fetchEventsAction() {
    return dispatch => {
        dispatch(loadingEvents())
        fetch('http://localhost:4000/events')
        .then(resp => resp.json())
        .then(event => {
            dispatch(fetchEvents(event))
            return event
        })
    }
}

export default fetchEventsAction