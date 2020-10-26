import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TouchableHighlight, TextInput} from 'react-native';
import styles from './../../styles/Styles';
import firebaseSevice from './../../services/firebase'

const SignUp = ({navigation}) => {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const createNewUser = async () => {
        try {
            await firebaseSevice.createUser(name, user, password)
            navigation.navigate('Main')
        } catch (error) {
            alert(error);
        }
    }

    return (
    <View style={styles.container}>
        <View>
        <TextInput 
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.nativeEvent.text)}
            style={styles.inputText}
            />
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
      <TouchableHighlight style={[styles.button, styles.primaryButton]} onPress={() => createNewUser()}>
          <Text style={[styles.textButton, styles.primaryTextButton]}>Create new user</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

export default SignUp;