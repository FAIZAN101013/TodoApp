import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {RootStackParamList} from '../App';
import {styles} from '../styles';
import {apiRequest, setToken} from '../api';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;

function LoginScreen({navigation}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Sends the email + password to the backend.
  // If they are correct we get a token back and go to Home.
  const handleLogin = async () => {
    if (!email.trim() || !password) {
      Alert.alert('Missing info', 'Please enter your email and password.');
      return;
    }

    try {
      const data = await apiRequest('/auth/login', 'POST', {
        email: email,
        password: password,
      });

      // Remember the token so task requests are authenticated
      setToken(data.token);

      // "replace" so pressing back does not return to the login screen
      navigation.replace('Home');
    } catch (error: any) {
      Alert.alert('Login failed', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.authContainer}>
      <Text style={styles.authTitle}>Login</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.authInput}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.authInput}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={styles.authButton}>
        <Text style={styles.authButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>
          Create an account
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default LoginScreen;
