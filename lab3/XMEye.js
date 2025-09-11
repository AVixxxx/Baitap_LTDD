import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function XMEye(){
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginVertical: 30 }}>
        <Image
          source={require('./assets/eyeball.png')}
          style={{ width: 150, height: 150,}}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('./assets/user.png')}
          style={styles.icon}
        />
        <TextInput
          placeholder="Please input user name"
          style={styles.input}
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('./assets/Vector.png')}
          style={styles.icon}
        />
        <TextInput
          placeholder="Please input password"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#888"
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dividerRow}>
        <View style={styles.divider} />
        <Text style={{ marginHorizontal: 8, color: '#333' }}>
          Other Login Methods
        </Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialBtnNewUser}>
          <Image
            source={require('./assets/newuser.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtnWifi}>
          <Image
            source={require('./assets/wifi.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtnFB}>
          <Image
            source={require('./assets/fb.png')}
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
    backgroundColor: '#fff',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 50,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  loginBtn: {
    backgroundColor: '#2979FF',
    borderRadius: 6,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  loginText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  linkText: {
    color: '#000',
    fontSize: 16,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#555',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialBtnNewUser: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#3AB4FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialBtnWifi: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#F4AA47',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialBtnFB: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#3A579C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
});