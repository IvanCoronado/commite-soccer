import { applyMiddleware, createStore, compose } from "redux";
import { AsyncStorage } from 'react-native'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { rootReducer } from "./resources/reducer/index";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const persitedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persitedReducer,
    {},
    composeEnhancers(
        compose(applyMiddleware(thunk))
    )
);

export const persitor = persistStore(store)
