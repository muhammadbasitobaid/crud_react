import { combineReducers } from "redux";
import { usersReducer } from './usersReducer'
const reducers = combineReducers({
    allUsers: usersReducer,

});
export default reducers; 