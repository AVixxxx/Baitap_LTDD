import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Screen1_b() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
        locations={[0.0003, 0.3021, 0.8542, 0.965, 1]}
        style={styles.background}
      />

      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('./assets/Vector.png')}
          style={{ width: 120, height: 120, resizeMode: 'contain' }}
        />
      </View>

      <View style={{ flex: 2, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', fontSize: 28, fontWeight: '800' }}>
          FORGET{'\n'}PASSWORD
        </Text>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '500',
          }}>
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>

      <View style={styles.formGroup}>
        <View style={styles.inputContainer}>
          <Image
            source={require('./assets/email.png')}
            style={styles.icon}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor="#333"
          />
        </View>

        <TouchableOpacity style={styles.action}>
          <Text style={styles.actionText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCF9',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  formGroup: {
    flex: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
    height: 50,
    width: '90%',
    paddingHorizontal: 10,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: '#000',
  },
  action: {
    width: '90%',
    height: 50,
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
  },
});