import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function Screen1_e() {
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState(null); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>

      <TextInput placeholder="Name" style={styles.input} />

      <TextInput placeholder="Phone" style={styles.input} keyboardType="phone-pad" />

      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          style={styles.passwordInput}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image
            source={require('./assets/eye.png')} 
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

     
      <TextInput placeholder="Birthday" style={styles.input} />

      
      <View style={styles.genderRow}>
        <TouchableOpacity
          style={styles.genderOption}
          onPress={() => setGender('male')}
        >
          <View style={[styles.radio, gender === 'male' && styles.radioSelected]} />
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.genderOption}
          onPress={() => setGender('female')}
        >
          <View style={[styles.radio, gender === 'female' && styles.radioSelected]} />
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>

      
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>REGISTER</Text>
      </TouchableOpacity>

      
      <Text style={styles.terms}>
        When you agree to terms and conditions
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFF0D8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    gap: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 10,
    color: '#000',
  },
  input: {
    backgroundColor: '#C8E6C9',
    width: '100%',
    height: 45,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C8E6C9',
    width: '100%',
    height: 45,
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#000',
  },
  genderRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  radio: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 9,
  },
  radioSelected: {
    backgroundColor: '#000',
  },
  genderText: {
    fontSize: 16,
    color: '#000',
  },
  registerButton: {
    backgroundColor: '#C1440E',
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 16,
  },
  terms: {
    marginTop: 10,
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
});
