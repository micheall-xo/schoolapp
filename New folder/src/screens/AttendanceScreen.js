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

const AttendanceScreen = ({ navigation }) => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', rollNo: '001', present: false },
    { id: 2, name: 'Jane Smith', rollNo: '002', present: false },
    { id: 3, name: 'Mike Johnson', rollNo: '003', present: false },
    { id: 4, name: 'Sarah Wilson', rollNo: '004', present: false },
    { id: 5, name: 'David Brown', rollNo: '005', present: false },
    { id: 6, name: 'Emily Davis', rollNo: '006', present: false },
    { id: 7, name: 'Robert Miller', rollNo: '007', present: false },
    { id: 8, name: 'Lisa Garcia', rollNo: '008', present: false },
    { id: 9, name: 'James Rodriguez', rollNo: '009', present: false },
    { id: 10, name: 'Maria Martinez', rollNo: '010', present: false },
  ]);

  const [date, setDate] = useState('Today');

  const toggleAttendance = (id) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  const markAllPresent = () => {
    setStudents(prevStudents =>
      prevStudents.map(student => ({ ...student, present: true }))
    );
  };

  const markAllAbsent = () => {
    setStudents(prevStudents =>
      prevStudents.map(student => ({ ...student, present: false }))
    );
  };

  const saveAttendance = () => {
    const presentCount = students.filter(student => student.present).length;
    const absentCount = students.length - presentCount;
    
    Alert.alert(
      'Attendance Summary',
      `Present: ${presentCount}\nAbsent: ${absentCount}\nTotal: ${students.length}`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Save',
          onPress: () => {
            Alert.alert('Success', 'Attendance saved successfully!');
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
        <Text style={styles.headerTitle}>ATTENDANCE</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>Date: {date}</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton} onPress={markAllPresent}>
            <Text style={styles.actionButtonText}>Mark All Present</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={markAllAbsent}>
            <Text style={styles.actionButtonText}>Mark All Absent</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.studentsList}>
          {students.map((student) => (
            <View key={student.id} style={styles.studentItem}>
              <View style={styles.studentInfo}>
                <Text style={styles.studentName}>{student.name}</Text>
                <Text style={styles.studentRollNo}>Roll No: {student.rollNo}</Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.attendanceButton,
                  student.present && styles.presentButton
                ]}
                onPress={() => toggleAttendance(student.id)}
              >
                <MaterialIcons
                  name={student.present ? 'check' : 'close'}
                  size={24}
                  color={student.present ? '#fff' : '#666'}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton} onPress={saveAttendance}>
          <Text style={styles.saveButtonText}>Save Attendance</Text>
        </TouchableOpacity>
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
  dateContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  actionButtonText: {
    fontSize: 14,
    color: '#333',
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
  attendanceButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  presentButton: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  footer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  saveButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AttendanceScreen;
