import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducers from './reducers/index';


const persistConfig = {
    key:'spotifyApp',
    storage
}


const persistedReducer  = persistReducer(persistConfig, reducers)

const store = createStore(
    persistedReducer,
    compose( applyMiddleware(thunk),    
    typeof window === 'object' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)

const persistor = persistStore(store)

export  { store,persistor };