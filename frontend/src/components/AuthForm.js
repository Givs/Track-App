import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButton }) => {
    const [showEye, setShowEye] = useState(false);
    const [visible, setVisible] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
    <>
     <Spacer>
    <Text h3>{headerText}</Text>
      </Spacer>
      <Input 
        label="Email"
        placeholder="example@example.com" 
        value={email} 
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
       />
      <Spacer />
      <View>
        <Input 
            secureTextEntry={visible}
            label="Password" 
            placeholder="******"
            value={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
            autoCapitalize="none"
            autoCorrect={false}
        />
        <TouchableOpacity style={styles.bntEye} onPress={
            () => {
                setVisible(!visible)
                setShowEye(!showEye)
            }
        }>
            <MaterialCommunityIcons 
                name={showEye === false ? 'eye-outline' : 'eye-off-outline'}
                size={26}
                color={'black'}
            />
        </TouchableOpacity>
      </View>
      { errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null }
      <Spacer>
        <Button 
          title={submitButton}
          onPress={() => onSubmit({ email, password})}
        />
      </Spacer>
    </>
    )
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        alignSelf: 'center',
        margin: 15
      },
    bntEye: {
        position: 'absolute',
        right:25,
        top: 8
    }
});

export default  AuthForm;