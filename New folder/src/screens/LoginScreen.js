import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation, route }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { role } = route.params || { role: 'student' };

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Simple validation - in real app, you'd check against backend
    if (username.length < 3 || password.length < 4) {
      Alert.alert('Error', 'Invalid credentials');
      return;
    }

    // Navigate to appropriate dashboard
    if (role === 'teacher') {
      navigation.replace('TeacherDashboard');
    } else {
      navigation.replace('StudentDashboard');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.bookIcon}>
          <View style={styles.bookTop} />
          <View style={styles.bookBase} />
        </View>
        <Text style={styles.headerTitle}>
          {role === 'teacher' ? 'Teacher Login' : 'Student Login'}
        </Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="person" size={24} color="#666" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Username or Email"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={24} color="#666" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Back to Role Selection</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#4CAF50',
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
    elevation: 5,
  },
  bookIcon: {
    width: 60,
    height: 60,
    marginBottom: 15,
    position: 'relative',
  },
  bookTop: {
    position: 'absolute',
    top: 0,
    left: 15,
    width: 30,
    height: 30,
    backgroundColor: '#4CAF50',
    borderRadius: 6,
    transform: [{ rotate: '45deg' }],
  },
  bookBase: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 60,
    height: 40,
    backgroundColor: '#4CAF50',
    borderRadius: 6,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    elevation: 3,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#666',
    fontSize: 16,
  },
});

export default LoginScreen;
