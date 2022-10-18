import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.util";

export  const setCurrentUser = (user) => 
    createAction( USER_ACTION_TYPES.SET_CURRENT_USER, user);

/*
    CHECK_USER_SESSION: 'user/CHECK_USER_SESSION',
    GOOGLE_SIGN_IN_START: 'user/GOOGLE_SIGN_IN_START',
    EMAIL_SIGN_IN_START: 'user/EMAIL_SIGN_IN_START',
    SIGN_IN_SUCCESSS: 'user/SIGN_IN_SUCCESSS',
    SIGN_IN_FAILURE:'user/SIGN_IN_FAILURE'

*/

export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
export const googleSignInStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
export const emailSignInStart = (email,password) => createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START,{email,password})
export const signInSuccess =(user) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESSS,user);
export const signInFailure = (user) => createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE,user) ;
export const signUpStart =(email,password,displayName) => createAction(USER_ACTION_TYPES.SIGN_UP_START,{email,password,displayName});
export const signUpSuccess = (user,additionalDetials) => createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESSS,{user,additionalDetials});
export const signUpFailure = (error) => createAction(USER_ACTION_TYPES.SIGN_UP_FAILURE, error);

export const signOutStart = () => createAction(USER_ACTION_TYPES.SIGN_OUT_START);
export const signOutSuccess = () => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESSS);
export const signOutFailure = (error) => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILURE,error)