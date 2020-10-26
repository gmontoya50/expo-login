import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebaseService from '../../services/firebase';
import styles from './Styles';

const Main = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    (
      async () => {
        try {
          const userData = await firebaseService.getUser();
          setUserName(userData);
        } catch (error) {
          alert('er '+error);
        }
      }
    )()
  }, [])
  return (
    <View style={styles.container}>
      <Text>Welcome {userName}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Main;