import React, {useState} from 'react';
import {
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

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;

function RegisterScreen({navigation}: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // No backend yet, so registering just sends the user
  // back to the Login screen.
  const handleRegister = () => {
    navigation.navigate('Login');
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
