import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ResultScreen = ({ navigation, route }) => {
  const { quizResults } = route.params || {};
  
  const subjects = [
    { name: 'Mathematics', marks: 85, fullMarks: 100 },
    { name: 'Science', marks: 78, fullMarks: 100 },
    { name: 'English', marks: 92, fullMarks: 100 },
    { name: 'History', marks: 88, fullMarks: 100 },
    { name: 'Geography', marks: 75, fullMarks: 100 },
    { name: 'Computer Science', marks: 95, fullMarks: 100 },
  ];

  const totalMarks = subjects.reduce((sum, subject) => sum + subject.marks, 0);
  const totalFullMarks = subjects.reduce((sum, subject) => sum + subject.fullMarks, 0);
  const percentage = Math.round((totalMarks / totalFullMarks) * 100);

  const handleDownload = () => {
    Alert.alert(
      'Download Result',
      'Your result has been downloaded successfully!',
      [{ text: 'OK' }]
    );
  };

  const getGrade = (percentage) => {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C+';
    if (percentage >= 40) return 'C';
    return 'F';
  };

  const getGradeColor = (grade) => {
    if (grade === 'A+' || grade === 'A') return '#4CAF50';
    if (grade === 'B+' || grade === 'B') return '#2196F3';
    if (grade === 'C+' || grade === 'C') return '#FF9800';
    return '#F44336';
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
        <Text style={styles.headerTitle}>RESULT</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {quizResults ? (
          // Quiz Results
          <View style={styles.quizResultContainer}>
            <View style={styles.quizResultHeader}>
              <MaterialIcons name="emoji-events" size={60} color="#FFD700" />
              <Text style={styles.quizResultTitle}>Quiz Completed!</Text>
            </View>
            
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>{quizResults.score}%</Text>
              <Text style={styles.scoreSubtext}>
                {quizResults.correctAnswers} out of {quizResults.totalQuestions} correct
              </Text>
            </View>

            <View style={styles.performanceContainer}>
              <Text style={styles.performanceTitle}>Performance</Text>
              <View style={styles.performanceBar}>
                <View 
                  style={[
                    styles.performanceFill, 
                    { width: `${quizResults.score}%` }
                  ]} 
                />
              </View>
            </View>
          </View>
        ) : (
          // Academic Results
          <View style={styles.resultContainer}>
            <View style={styles.summaryContainer}>
              <Text style={styles.summaryTitle}>Academic Performance</Text>
              <View style={styles.gradeContainer}>
                <Text style={[
                  styles.gradeText,
                  { color: getGradeColor(getGrade(percentage)) }
                ]}>
                  {getGrade(percentage)}
                </Text>
                <Text style={styles.percentageText}>{percentage}%</Text>
              </View>
              <Text style={styles.totalMarksText}>
                Total: {totalMarks}/{totalFullMarks}
              </Text>
            </View>

            <View style={styles.subjectsContainer}>
              <Text style={styles.subjectsTitle}>Subject-wise Results</Text>
              {subjects.map((subject, index) => (
                <View key={index} style={styles.subjectItem}>
                  <View style={styles.subjectInfo}>
                    <Text style={styles.subjectName}>{subject.name}</Text>
                    <Text style={styles.subjectMarks}>
                      {subject.marks}/{subject.fullMarks}
                    </Text>
                  </View>
                  <View style={styles.marksBar}>
                    <View 
                      style={[
                        styles.marksFill, 
                        { width: `${(subject.marks / subject.fullMarks) * 100}%` }
                      ]} 
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}

        <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
          <MaterialIcons name="download" size={24} color="#fff" />
          <Text style={styles.downloadButtonText}>
            {quizResults ? 'Download Quiz Result' : 'Download Result'}
          </Text>
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
  quizResultContainer: {
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
  quizResultHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  quizResultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  scoreSubtext: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  performanceContainer: {
    marginBottom: 10,
  },
  performanceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  performanceBar: {
    height: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  performanceFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  resultContainer: {
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
  summaryContainer: {
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  gradeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  gradeText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginRight: 15,
  },
  percentageText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  totalMarksText: {
    fontSize: 18,
    color: '#666',
  },
  subjectsContainer: {
    marginBottom: 10,
  },
  subjectsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  subjectItem: {
    marginBottom: 20,
  },
  subjectInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  subjectName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  subjectMarks: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2196F3',
  },
  marksBar: {
    height: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  marksFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 3,
  },
  downloadButton: {
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 8,
    elevation: 3,
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default ResultScreen;
