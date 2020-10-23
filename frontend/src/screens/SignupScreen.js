import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const SignupScreen = ({ navigation }) => {

    const { state, signup, clearErrorMessage } = useContext(AuthContext);
    
  return (
    <View style={styles.container}>
      <NavigationEvents 
        onWillFocus={clearErrorMessage}
      />
      <AuthForm 
        headerText="Create your account on Tracker"
        errorMessage={state.errorMessage}
        submitButton="Sign Up"
        onSubmit={({ email, password }) => signup({ email, password })}
      />

      <NavLink 
        text="Already have an account? Sign In instead!"
        routeName="Signin"
      />
      
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
        marginTop: 200
    }
});

export default SignupScreen;
