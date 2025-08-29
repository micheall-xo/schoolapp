import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const StudentProfileScreen = ({ navigation }) => {
  const [profile] = useState({
    id: '199653',
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 234 567 8900',
    address: '123 Main Street, City, State 12345',
    class: 'Grade 10',
    rollNo: '001',
    dateOfBirth: '15 March 2008',
    parentName: 'Jane Doe',
    parentPhone: '+1 234 567 8901',
    emergencyContact: '+1 234 567 8902',
  });

  const handleRequestEdit = () => {
    Alert.alert(
      'Request Edit',
      'Your edit request has been submitted. An administrator will review and contact you soon.',
      [{ text: 'OK' }]
    );
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'RoleSelection' }],
            });
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Student Profile</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <MaterialIcons name="logout" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <MaterialIcons name="person" size={60} color="#2196F3" />
          </View>
          <Text style={styles.studentName}>{profile.name}</Text>
          <Text style={styles.studentClass}>{profile.class}</Text>
          <Text style={styles.studentId}>ID: {profile.id}</Text>
        </View>

        <View style={styles.profileSection}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          
          <View style={styles.infoItem}>
            <MaterialIcons name="person" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Full Name</Text>
              <Text style={styles.infoValue}>{profile.name}</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <MaterialIcons name="email" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>{profile.email}</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <MaterialIcons name="phone" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Phone Number</Text>
              <Text style={styles.infoValue}>{profile.phone}</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <MaterialIcons name="location-on" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Address</Text>
              <Text style={styles.infoValue}>{profile.address}</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <MaterialIcons name="school" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Class</Text>
              <Text style={styles.infoValue}>{profile.class}</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <MaterialIcons name="confirmation-number" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Roll Number</Text>
              <Text style={styles.infoValue}>{profile.rollNo}</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <MaterialIcons name="cake" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Date of Birth</Text>
              <Text style={styles.infoValue}>{profile.dateOfBirth}</Text>
            </View>
          </View>
        </View>

        <View style={styles.profileSection}>
          <Text style={styles.sectionTitle}>Parent/Guardian Information</Text>
          
          <View style={styles.infoItem}>
            <MaterialIcons name="people" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Parent Name</Text>
              <Text style={styles.infoValue}>{profile.parentName}</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <MaterialIcons name="phone" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Parent Phone</Text>
              <Text style={styles.infoValue}>{profile.parentPhone}</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <MaterialIcons name="emergency" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Emergency Contact</Text>
              <Text style={styles.infoValue}>{profile.emergencyContact}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.editButton} onPress={handleRequestEdit}>
          <MaterialIcons name="edit" size={24} color="#fff" />
          <Text style={styles.editButtonText}>Request Edit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4CAF50',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  logoutButton: {
    padding: 5,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  profileHeader: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#2196F3',
  },
  studentName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  studentClass: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  studentId: {
    fontSize: 16,
    color: '#2196F3',
    fontWeight: '600',
  },
  profileSection: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  infoContent: {
    flex: 1,
    marginLeft: 15,
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    lineHeight: 22,
  },
  editButton: {
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
    elevation: 3,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default StudentProfileScreen;
