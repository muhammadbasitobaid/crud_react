import { actionTypes } from '../constants/action-types'


const initialState = {
    isLoading: true,
    users: [],
    error: '',
}

export const usersReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case actionTypes.REQUEST_USERS:
            return {
                ...state,
                isLoading: true,
                users: [],
                error: '',

            }
        case actionTypes.REQUEST_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: payload,
                error: '',
            }
        case actionTypes.REQUEST_USERS_FAILED:
            return {
                ...state,
                isLoading: false,
                users: [],
                error: payload,
            }
        case actionTypes.REQUEST_USERS_FAILED:
            return {
                ...state,
                isLoading: false,
                users: [],
                error: payload,
            }
        case actionTypes.ADD_NEW_USER:
            return {
                ...state,
                // isLoading: false,
                users: [
                    ...state.users,
                    {
                        id: state.users.length + 1,
                        name: payload.name,
                        username: payload.username,
                        email: payload.email,
                    }
                ],
            }
        case actionTypes.UPDATE_USER:
            {
                return {
                    ...state, //copying the orignal state
                    users: payload, //reassingning todos to new array
                }
            }
        default:
            return state
    }
}
