import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "../reducers/reducers";

const configStore = () => {
    const store = createStore(combineReducers({
        storeData : rootReducer
    }), applyMiddleware(thunk))

    return store
}

export default configStore