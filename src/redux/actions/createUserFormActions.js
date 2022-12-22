import { actionTypes } from '../constants/action-types';
export const addNewUser = (userDetails) => ({
    type: actionTypes.ADD_NEW_USER,
    payload: userDetails
})



