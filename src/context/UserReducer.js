import { actionTypes } from '../redux/constants/action-types';


export default (state, { type, payload }) => {
    switch (type) {

        // case actionTypes.REQUEST_USERS:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         error: '',
        //     }
        //   case actionTypes.REQUEST_USERS_SUCCESS:
        //     return { ...state, ...payload }
        //   case actionTypes.REQUEST_USERS_FAILED:
        //     return { ...state, ...payload }
        //   case actionTypes.ADD_NEW_USER:
        //     return { ...state, ...payload }
        //   case actionTypes.UPATE_USER:
        //     return { ...state, ...payload }

        default:
            return state
    }
}
