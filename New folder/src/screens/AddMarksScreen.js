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

const AddMarksScreen = ({ navigation }) => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', rollNo: '001', marks: '' },
    { id: 2, name: 'Jane Smith', rollNo: '002', marks: '' },
    { id: 3, name: 'Mike Johnson', rollNo: '003', marks: '' },
    { id: 4, name: 'Sarah Wilson', rollNo: '004', marks: '' },
    { id: 5, name: 'David Brown', rollNo: '005', marks: '' },
    { id: 6, name: 'Emily Davis', rollNo: '006', marks: '' },
    { id: 7, name: 'Robert Miller', rollNo: '007', marks: '' },
    { id: 8, name: 'Lisa Garcia', rollNo: '008', marks: '' },
    { id: 9, name: 'James Rodriguez', rollNo: '009', marks: '' },
    { id: 10, name: 'Maria Martinez', rollNo: '010', marks: '' },
  ]);

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

  const updateMarks = (id, marks) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === id ? { ...student, marks } : student
      )
    );
  };

  const validateMarks = (marks) => {
    const num = parseInt(marks);
    return !isNaN(num) && num >= 0 && num <= 100;
  };

  const handleSaveMarks = () => {
    if (!selectedSubject) {
      Alert.alert('Error', 'Please select a subject');
      return;
    }

    const invalidMarks = students.filter(student => 
      student.marks === '' || !validateMarks(student.marks)
    );

    if (invalidMarks.length > 0) {
      Alert.alert('Error', 'Please enter valid marks (0-100) for all students');
      return;
    }

    Alert.alert(
      'Marks Saved',
      `Marks for ${selectedSubject} have been saved successfully!`,
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

  const clearAllMarks = () => {
    setStudents(prevStudents =>
      prevStudents.map(student => ({ ...student, marks: '' }))
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
        <Text style={styles.headerTitle}>ADD MARKS</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.subjectSelector}>
        <Text style={styles.subjectLabel}>Select Subject:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
        </ScrollView>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.studentsList}>
          {students.map((student) => (
            <View key={student.id} style={styles.studentItem}>
              <View style={styles.studentInfo}>
                <Text style={styles.studentName}>{student.name}</Text>
                <Text style={styles.studentRollNo}>Roll No: {student.rollNo}</Text>
              </View>
              <View style={styles.marksInputContainer}>
                <TextInput
                  style={[
                    styles.marksInput,
                    student.marks !== '' && !validateMarks(student.marks) && styles.invalidInput
                  ]}
                  value={student.marks}
                  onChangeText={(text) => updateMarks(student.id, text)}
                  placeholder="0-100"
                  keyboardType="numeric"
                  maxLength={3}
                />
                <Text style={styles.maxMarks}>/100</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.clearButton} onPress={clearAllMarks}>
            <Text style={styles.clearButtonText}>Clear All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveMarks}>
            <Text style={styles.saveButtonText}>Save Marks</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  subjectSelector: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  subjectLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  subjectContainer: {
    flexDirection: 'row',
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
  content: {
    flex: 1,
    padding: 20,
  },
  studentsList: {
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  studentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  studentRollNo: {
    fontSize: 14,
    color: '#666',
  },
  marksInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marksInput: {
    width: 60,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  invalidInput: {
    borderColor: '#F44336',
    backgroundColor: '#ffebee',
  },
  maxMarks: {
    fontSize: 16,
    color: '#666',
    marginLeft: 5,
  },
  footer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 15,
  },
  clearButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  clearButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddMarksScreen;
