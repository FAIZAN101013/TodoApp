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
import {apiRequest} from '../api';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;

function RegisterScreen({navigation}: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Creates the account on the backend,
  // then sends the user back to Login to sign in.
  const handleRegister = async () => {
    if (!name.trim() || !email.trim() || !password) {
      Alert.alert('Missing info', 'Please fill in name, email and password.');
      return;
    }

    try {
      await apiRequest('/auth/register', 'POST', {
        name: name,
        email: email,
        password: password,
      });

      Alert.alert('Success', 'Account created! Please log in.');
      navigation.navigate('Login');
    } catch (error: any) {
      Alert.alert('Register failed', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.authContainer}>
      <Text style={styles.authTitle}>Create Account</Text>

      <TextInput
        placeholder="Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
        style={styles.authInput}
      />

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
        onPress={handleRegister}
        style={styles.authButton}>
        <Text style={styles.authButtonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default RegisterScreen;
