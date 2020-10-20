import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Context as AuthContext } from '../context/AuthContext';

import Spacer from '../components/Spacer';


const SignupScreen = ({ navigation }) => {

    const { state, signup } = useContext(AuthContext);

    const [showEye, setShowEye] = useState(false);
    const [visible, setVisible] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
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
      <Spacer>
        <Button 
          title="Sign Up"
          onPress={() => signup({ email, password})}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
    bntEye: {
        position: 'absolute',
        right:25,
        top: 8
    }
});

export default SignupScreen;
