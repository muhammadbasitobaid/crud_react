import { react, createContext, useReducer } from 'react';
import { actionTypes } from '../redux/constants/action-types';
import UserReducer from './UserReducer';

// initial State
const initialState = {
    isLoading: true,
    users: [],
    error: '',
}

// creating the context

export const UserContext = createContext(initialState);

// context provider

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)
    const requestUsers = () => {
        return dispatch({
            type: actionTypes.REQUEST_USERS,
        })
    }

    return (
        <UserContext.Provider value={{
            state,
            requestUsers,
        }}>
            {children}
        </UserContext.Provider>
    )
}

