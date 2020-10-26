import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TouchableHighlight, TextInput} from 'react-native';
import styles from './../../styles/Styles';
import firebaseSevice from './../../services/firebase'

const Login = ({navigation}) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const onPressLogin = async () => {
        try {
            await firebaseSevice.login(user,password)
            navigation.navigate('Main')
        } catch (error) {
            alert(error);
        }
    }

    return (
    <View style={styles.container}>
        <View>
            <TextInput 
            placeholder="Email" 
            value={user}
            onChange={(e) => setUser(e.nativeEvent.text)}
            style={styles.inputText}
            />
            <TextInput 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.nativeEvent.text)}
            style={styles.inputText} 
             />
        </View>
      <TouchableHighlight style={[styles.button, styles.primaryButton]} onPress={() => onPressLogin()}>
          <Text style={[styles.textButton, styles.primaryTextButton]}>Login</Text>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.button, styles.segundaryButton]} onPress={() => navigation.navigate('SignUp')}>
          <Text style={[styles.textButton]}>Create new user</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

export default Login;