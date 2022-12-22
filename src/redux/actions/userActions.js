import { actionTypes } from '../constants/action-types';
export const requestUsers = () => ({

    type: actionTypes.REQUEST_USERS,

})
export const requestUsersSuccess = (users) => ({
    type: actionTypes.REQUEST_USERS_SUCCESS,
    payload: users
})
export const requestUsersFailed = (error) => ({
    type: actionTypes.REQUEST_USERS_FAILED,
    payload: error
})
export const updateUser = (updatedState) => ({
    type: actionTypes.UPDATE_USER,
    payload: updatedState,
})

