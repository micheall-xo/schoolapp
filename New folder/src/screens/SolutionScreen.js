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

const SolutionScreen = ({ navigation }) => {
  const [solution, setSolution] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const subjects = [
    'Mathematics',
    'Science',
    'English',
    'History',
    'Geography',
    'Computer Science',
    'Physics',
    'Chemistry',
    'Biology',
  ];

  const handleSendSolution = () => {
    if (!solution.trim()) {
      Alert.alert('Error', 'Please enter solution content');
      return;
    }

    if (!selectedSubject) {
      Alert.alert('Error', 'Please select a subject');
      return;
    }

    Alert.alert(
      'Solution Sent',
      'Your solution has been sent successfully!',
      [
        {
          text: 'OK',
          onPress: () => {
            setSolution('');
            setSelectedSubject('');
            navigation.goBack();
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
        <Text style={styles.headerTitle}>SOLUTIONS</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Provide Solution</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Subject</Text>
            <View style={styles.subjectContainer}>
              {subjects.map((subject, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.subjectChip,
                    selectedSubject === subject && styles.selectedSubjectChip
                  ]}
                  onPress={() => setSelectedSubject(subject)}
                >
                  <Text style={[
                    styles.subjectChipText,
                    selectedSubject === subject && styles.selectedSubjectChipText
                  ]}>
                    {subject}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Solution</Text>
            <TextInput
              style={styles.solutionInput}
              value={solution}
              onChangeText={setSolution}
              placeholder="Type your solution here... Provide clear explanations and step-by-step solutions when possible."
              multiline
              numberOfLines={8}
              textAlignVertical="top"
            />
            <Text style={styles.characterCount}>
              {solution.length}/1000 characters
            </Text>
          </View>

          <View style={styles.tipsContainer}>
            <Text style={styles.tipsTitle}>Tips for better solutions:</Text>
            <View style={styles.tipItem}>
              <MaterialIcons name="check-circle" size={16} color="#4CAF50" />
              <Text style={styles.tipText}>Explain the concept clearly</Text>
            </View>
            <View style={styles.tipItem}>
              <MaterialIcons name="check-circle" size={16} color="#4CAF50" />
              <Text style={styles.tipText}>Include step-by-step explanations</Text>
            </View>
            <View style={styles.tipItem}>
              <MaterialIcons name="check-circle" size={16} color="#4CAF50" />
              <Text style={styles.tipText}>Use examples when helpful</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.sendButton} onPress={handleSendSolution}>
            <MaterialIcons name="send" size={24} color="#fff" />
            <Text style={styles.sendButtonText}>Send Solution</Text>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 25,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  subjectContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  subjectChip: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedSubjectChip: {
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
  },
  subjectChipText: {
    fontSize: 14,
    color: '#666',
  },
  selectedSubjectChipText: {
    color: '#fff',
    fontWeight: '600',
  },
  solutionInput: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    minHeight: 150,
  },
  characterCount: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
    marginTop: 5,
  },
  tipsContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 15,
    marginBottom: 25,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
    flex: 1,
  },
  sendButton: {
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 8,
    elevation: 3,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default SolutionScreen;
