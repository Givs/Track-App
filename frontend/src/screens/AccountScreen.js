import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';

import Spacer from '../components/Spacer';
import { Context as AuthContext} from '../context/AuthContext';

const AccountScreen = () => {

    const {signout} = useContext(AuthContext);

    return (

        <View style={styles.container}>
            <Text style={styles.text} > Settings </Text>
            <Spacer>
                <Button style={styles.button} title="Sign Out" onPress={signout} type="clear" />
            </Spacer>
        </View>
       
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 100
    },
    text: {
        fontSize: 38,
        alignSelf: 'center',
    },
    button: {
        marginTop:50,
        fontSize: 28
    }
});

export default AccountScreen;