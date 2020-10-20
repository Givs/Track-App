import CreateDataContext from './CreateDataContext';
import trackerApi from '../api/Tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup =  (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('./signup', { email, password });
            console.log(response.data);
        }catch(err){
            console.log(err.response.data);
        }
    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {

    };
};

const signout = (dispatch) => {
    return () => {

    };
};

export const { Provider, Context } = CreateDataContext(
    authReducer,
    {signin, signout, signup},
    { isSignedIn: false }
);
