import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function screen1_a() {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#ffffff', '#c1f0f7', '#37D6F8']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <Image
        source={require('./assets/ellipse.png')} 
        style={styles.image}
      />

      <Text style={styles.title}>GROW{'\n'}YOUR BUSINESS</Text>

      <Text style={styles.subtitle}>
        We will help you to grow your business using{'\n'}online server
      </Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity >
        <Text style={styles.outlineButtonText}>HOW WE WORK?</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 40,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  primaryButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  primaryButtonText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
  outlineButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
