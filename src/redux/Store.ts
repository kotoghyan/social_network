import {combineReducers, createStore, applyMiddleware} from 'redux'
import profileReducer from './ProfileReducer/ProfileReducer.ts';
import dialogsReducer from './DialogsReducer/DialogsReducer.ts';
import siteBarReducer from './siteBarReducer/siteBarReducer';
import usersReducer from './usersReducer/usersReducer.ts';
import authReducer from "./authReducer/authReducer.ts";
import appReducer from "./appReducer/appReducer.ts";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'



const rootReducer = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer,
    siteBar:siteBarReducer,
    usersPage:usersReducer,
    authentication:authReducer,
    form: formReducer,
    app:appReducer
});

// export type RootState = ReturnType<typeof rootReducer>

declare global {
    interface Window { store: typeof store; }
}


const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store

export default store;