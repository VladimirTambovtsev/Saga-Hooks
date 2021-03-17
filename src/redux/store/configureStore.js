import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import {entriesReducer} from "../reducers/entries.reducer";
import {modalsReducer} from "../reducers/modals.reducer";
import {initSagas} from "../sagas";

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

export const configureStore = () => {
    // create store
    const store = createStore(
        // combine reducers
        combineReducers({
            entries: entriesReducer,
            modals: modalsReducer,
        }),
        // enable chrome redux extension
        composeWithDevTools(
            // apply all middlewares
            applyMiddleware(...middlewares)
        )
    )
    // add sagas to store
    initSagas(sagaMiddleware)
    return store
}