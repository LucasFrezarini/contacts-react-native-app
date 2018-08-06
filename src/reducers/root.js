import { combineReducers } from "redux";
import contact from "./contact";
import contacts from "./contacts";
import { reducer as formReducer } from "redux-form/immutable";

const reducers = combineReducers({
    contact,
    contacts,
    form: formReducer,
});

export default reducers;
