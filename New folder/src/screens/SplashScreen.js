import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('RoleSelection');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

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
});

export default SplashScreen;
