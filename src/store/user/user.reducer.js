import { USER_ACTION_TYPES } from "./user.types";

const INTIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = INTIAL_STATE,action) => {
    console.log('dispatched');
   const {type, payload} = action;
   console.log(action);
   
   switch(type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESSS:
        return {  ...state,currentUser: payload};
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
        return {...state, currentUser: null};
    case USER_ACTION_TYPES.SIGN_OUT_FAILURE:
        case USER_ACTION_TYPES.SIGN_IN_FAILURE:
            case USER_ACTION_TYPES.SIGN_UP_FAILURE:
        return {...state, error: payload};   
        default:
            return state;
       
   

}
}

