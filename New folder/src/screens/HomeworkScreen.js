import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

const HomeworkScreen = ({ navigation, route }) => {
  const [homeworkTitle, setHomeworkTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isTeacher] = useState(route.params?.role === 'teacher');

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: true,
      });

      if (result.type === 'success') {
        setSelectedFile(result);
        Alert.alert('Success', 'File selected successfully!');
      }
    } catch (err) {
      Alert.alert('Error', 'Failed to pick document');
    }
  };

  const handleSubmit = () => {
    if (!homeworkTitle.trim()) {
      Alert.alert('Error', 'Please enter homework title');
      return;
    }

    if (isTeacher && !selectedFile) {
      Alert.alert('Error', 'Please select a file to upload');
      return;
    }

    Alert.alert(
      'Success',
      isTeacher ? 'Homework uploaded successfully!' : 'Homework submitted successfully!',
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
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
        <Text style={styles.headerTitle}>HOMEWORK</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>
            {isTeacher ? 'Upload Homework' : 'Submit Homework'}
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Homework Title</Text>
            <TextInput
              style={styles.input}
              value={homeworkTitle}
              onChangeText={setHomeworkTitle}
              placeholder="Enter homework title"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Due Date</Text>
            <TouchableOpacity style={styles.dateButton}>
              <Text style={styles.dateButtonText}>
                {dueDate || 'Select due date'}
              </Text>
              <MaterialIcons name="calendar-today" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          {isTeacher ? (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Upload Homework File</Text>
              <TouchableOpacity style={styles.uploadButton} onPress={pickDocument}>
                <MaterialIcons name="cloud-upload" size={40} color="#2196F3" />
                <Text style={styles.uploadText}>
                  {selectedFile ? selectedFile.name : 'Upload your homework'}
                </Text>
                <Text style={styles.uploadSubtext}>Tap to select file</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Download Homework</Text>
              <View style={styles.downloadContainer}>
                <Text style={styles.homeworkTitle}>Mathematics Assignment</Text>
                <Text style={styles.homeworkDate}>Due: 15th December 2024</Text>
                <TouchableOpacity style={styles.downloadButton}>
                  <Text style={styles.downloadButtonText}>Download your homework</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>
              {isTeacher ? 'Upload' : 'Submit'}
            </Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#2196F3',
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
  placeholder: {
    width: 34,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  dateButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  dateButtonText: {
    fontSize: 16,
    color: '#333',
  },
  uploadButton: {
    borderWidth: 2,
    borderColor: '#2196F3',
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  uploadText: {
    fontSize: 16,
    color: '#2196F3',
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
  },
  uploadSubtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  downloadContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  homeworkTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  homeworkDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  downloadButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    elevation: 3,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeworkScreen;
