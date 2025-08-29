import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const QuestionListScreen = ({ navigation }) => {
  const [questions] = useState([
    {
      id: 1,
      title: 'Mathematics Problem',
      description: 'I need help with solving quadratic equations. Can someone explain the steps?',
      subject: 'Mathematics',
      date: '2024-12-01',
      status: 'answered',
      answerCount: 2,
    },
    {
      id: 2,
      title: 'Science Experiment',
      description: 'What are the safety precautions for the chemistry lab experiment?',
      subject: 'Science',
      date: '2024-12-02',
      status: 'pending',
      answerCount: 0,
    },
    {
      id: 3,
      title: 'English Literature',
      description: 'Can someone help me understand the themes in Shakespeare\'s Macbeth?',
      subject: 'English',
      date: '2024-12-03',
      status: 'answered',
      answerCount: 1,
    },
    {
      id: 4,
      title: 'History Assignment',
      description: 'I need help with my research paper on World War II.',
      subject: 'History',
      date: '2024-12-04',
      status: 'pending',
      answerCount: 0,
    },
    {
      id: 5,
      title: 'Computer Programming',
      description: 'How do I implement a binary search algorithm in Python?',
      subject: 'Computer Science',
      date: '2024-12-05',
      status: 'answered',
      answerCount: 3,
    },
  ]);

  const getStatusColor = (status) => {
    return status === 'answered' ? '#4CAF50' : '#FF9800';
  };

  const getStatusText = (status) => {
    return status === 'answered' ? 'Answered' : 'Pending';
  };

  const handleQuestionPress = (question) => {
    navigation.navigate('Answer', { question });
  };

  const handleAddQuestion = () => {
    navigation.navigate('AskQuestion');
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
        <Text style={styles.headerTitle}>QUESTION LIST</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.questionsContainer}>
          {questions.map((question) => (
            <TouchableOpacity
              key={question.id}
              style={styles.questionItem}
              onPress={() => handleQuestionPress(question)}
            >
              <View style={styles.questionHeader}>
                <View style={styles.questionTitleContainer}>
                  <Text style={styles.questionTitle}>{question.title}</Text>
                  <View style={[
                    styles.statusBadge,
                    { backgroundColor: getStatusColor(question.status) }
                  ]}>
                    <Text style={styles.statusText}>
                      {getStatusText(question.status)}
                    </Text>
                  </View>
                </View>
                <Text style={styles.questionDate}>{question.date}</Text>
              </View>

              <Text style={styles.questionDescription}>{question.description}</Text>

              <View style={styles.questionFooter}>
                <View style={styles.subjectContainer}>
                  <MaterialIcons name="school" size={16} color="#666" />
                  <Text style={styles.subjectText}>{question.subject}</Text>
                </View>
                
                <View style={styles.answerContainer}>
                  <MaterialIcons name="question-answer" size={16} color="#666" />
                  <Text style={styles.answerText}>
                    {question.answerCount} {question.answerCount === 1 ? 'answer' : 'answers'}
                  </Text>
                </View>
              </View>

              <View style={styles.questionActions}>
                <TouchableOpacity style={styles.actionButton}>
                  <MaterialIcons name="visibility" size={16} color="#666" />
                  <Text style={styles.actionText}>View</Text>
                </TouchableOpacity>
                
                {question.status === 'answered' && (
                  <TouchableOpacity style={styles.actionButton}>
                    <MaterialIcons name="check-circle" size={16} color="#4CAF50" />
                    <Text style={[styles.actionText, { color: '#4CAF50' }]}>View Answer</Text>
                  </TouchableOpacity>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={handleAddQuestion}>
        <MaterialIcons name="add" size={30} color="#fff" />
      </TouchableOpacity>
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
  questionsContainer: {
    gap: 15,
  },
  questionItem: {
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
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  questionTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  questionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  questionDate: {
    fontSize: 12,
    color: '#666',
  },
  questionDescription: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginBottom: 15,
  },
  questionFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  subjectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  subjectText: {
    fontSize: 14,
    color: '#666',
  },
  answerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  answerText: {
    fontSize: 14,
    color: '#666',
  },
  questionActions: {
    flexDirection: 'row',
    gap: 15,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  actionText: {
    fontSize: 14,
    color: '#666',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default QuestionListScreen;
