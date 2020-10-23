import { AsyncStorage } from 'react-native';
import CreateDataContext from './CreateDataContext';
import trackerApi from '../api/Tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'clear_error_message':
            return { ...state, errorMessage:'' }
        case 'signin':
            return { errorMessage:'', token: action.payload };
        case 'signup':
            return {errorMessage:'', token: action.payload};
        case 'add_error':
           return {...state, errorMessage: action.payload}; 
        default:
            return state;
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message'})
}

const signup =  (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('./signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signup', payload: response.data.token });

            navigate('TrackList')
        }catch(err){
            dispatch({ type: 'add_error', payload: 'Something went wrong with Sign Up :(' });
        }
    };
};

const signin = (dispatch) => {
    return async ({ email, password }) => {
        try{
            const response = await trackerApi.post('./signin', { email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload:response.data.token});

            navigate('TrackList');
        }catch(err){
            console.log(err)
            dispatch({ type: 'add_error', payload: 'Something went wrong with Sign In :('});
        }
    };
};

const signout = (dispatch) => {
    return () => {

    };
};

export const { Provider, Context } = CreateDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMessage},
    { token: null, errorMessage:'' }
);
