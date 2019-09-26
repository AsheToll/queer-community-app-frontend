import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers.js'
import thunk from 'redux-thunk'
import {fetchEvents} from './actions.js'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

store.dispatch(fetchEvents())

export default store