import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  SectionList,
  ScrollView,
  TextInput
} from 'react-native';
import auth from '@react-native-firebase/auth';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  auth()
    .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
    
  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: row}}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter email here!"
          onChangeText={email => setEmail(email)}
          defaultValue={email}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Enter password here!"
          onChangeText={password => setPassword(password)}
          defaultValue={password}
        />
      </View>
    </SafeAreaView>
  );
};