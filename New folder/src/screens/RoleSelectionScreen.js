import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const RoleSelectionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.logoContainer}>
          <View style={styles.bookIcon}>
            <View style={styles.bookTop} />
            <View style={styles.bookBase} />
          </View>
          <Text style={styles.appName}>CREATIVE READERS</Text>
        </View>
      </View>
      
      <View style={styles.bottomSection}>
        <View style={styles.curve} />
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.roleButton, styles.studentButton]}
            onPress={() => navigation.navigate('Login', { role: 'student' })}
          >
            <MaterialIcons name="school" size={40} color="#4CAF50" />
            <Text style={styles.buttonText}>Student</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.roleButton, styles.teacherButton]}
            onPress={() => navigation.navigate('Login', { role: 'teacher' })}
          >
            <MaterialIcons name="person" size={40} color="#2196F3" />
            <Text style={styles.buttonText}>Teacher</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#2196F3',
    position: 'relative',
  },
  curve: {
    position: 'absolute',
    top: -50,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#2196F3',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  logoContainer: {
    alignItems: 'center',
  },
  bookIcon: {
    width: 80,
    height: 80,
    marginBottom: 20,
    position: 'relative',
  },
  bookTop: {
    position: 'absolute',
    top: 0,
    left: 20,
    width: 40,
    height: 40,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    transform: [{ rotate: '45deg' }],
  },
  bookBase: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 80,
    height: 50,
    backgroundColor: '#2196F3',
    borderRadius: 8,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
    letterSpacing: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  roleButton: {
    width: width - 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  studentButton: {
    borderLeftWidth: 5,
    borderLeftColor: '#4CAF50',
  },
  teacherButton: {
    borderLeftWidth: 5,
    borderLeftColor: '#2196F3',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
});

export default RoleSelectionScreen;
