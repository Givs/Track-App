import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {

    const { state, signin,clearErrorMessage } = useContext(AuthContext);

    return (
       <View style={styles.container}>
           <NavigationEvents 
            onWillFocus={clearErrorMessage}
           />
           <AuthForm 
            headerText="Sign In to Your Account"
            errorMessage={state.errorMessage}
            submitButton="Sign In"
            onSubmit={({ email, password }) => signin({ email, password })}
           />

           <NavLink 
            text="Don't have an account? Go back to Sign Up!"
            routeName="Signup"
           />
       </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
        marginTop: 200
    }
});

export default SigninScreen;