import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers.js'
import thunk from 'redux-thunk'
import {
    fetchEvents,
    fetchCategories,
    fetchEventAttendees,
    fetchEventCreators
} from './actions.js'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

store.dispatch(fetchEvents())
store.dispatch(fetchCategories())
store.dispatch(fetchEventAttendees())
store.dispatch(fetchEventCreators())

export default store