import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
    return (
        <>
            <Text style={{ fontSize: 38 }} > SignupScreen </Text>
            <Button title="Go to Signin" onPress={() => navigation.navigate('Signin')} />
        </>
    )
};

const styles = StyleSheet.create({

});

export default SignupScreen;