import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Screen2_a() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <LinearGradient
      colors={['#FFD700', '#C99700']} 
      style={styles.container}
    >
      <Text style={styles.title}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <Image source={require('./assets/user.png')} style={styles.icon} />
        <TextInput
          placeholder="Name"
          placeholderTextColor="#000"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('./assets/Vector.png')} style={styles.icon} />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#000"
          secureTextEntry={!passwordVisible}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Image source={require('./assets/eye.png')} style={styles.iconEye} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.createAccount}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 10,
    tintColor: '#000',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  iconEye: {
    width: 22,
    height: 22,
    tintColor: '#000',
  },
  loginButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  createAccount: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
