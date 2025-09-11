import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Screen1_dd() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="#333"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          style={styles.passwordInput}
          secureTextEntry={!passwordVisible}
          placeholderTextColor="#333"
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Image
            source={require('./assets/eye.png')}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

  
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>
        When you agree to terms and conditions
      </Text>


      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>

      <Text style={styles.orLogin}>Or login with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.fbButton]}>
          <Image
            source={require('./assets/fb.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.zaloButton]}>
          <Image
            source={require('./assets/zalo.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <Image
            source={require('./assets/google.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2E1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  input: {
    width: '100%',
    backgroundColor: '#CFE2CD',
    padding: 12,
    borderRadius: 5,
    marginBottom: 15,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CFE2CD',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#000',
  },
  loginButton: {
    backgroundColor: '#C74B37',
    width: '100%',
    padding: 14,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  terms: {
    fontSize: 12,
    color: '#000',
    marginBottom: 10,
  },
  forgotPassword: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  orLogin: {
    fontSize: 12,
    marginBottom: 10,
    color: '#000',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  socialButton: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    padding: 12,
    borderRadius: 5,
  },
  fbButton: {
    backgroundColor: '#1877F2', // xanh Facebook
  },
  zaloButton: {
    backgroundColor: '#0084FF', // xanh Zalo
  },
  googleButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  socialIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
