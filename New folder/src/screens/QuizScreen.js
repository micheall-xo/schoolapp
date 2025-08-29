import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const QuizScreen = ({ navigation, route }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      type: 'multiple-choice',
      question: 'What is first king of Nepal?',
      options: ['Prithvi Narayan Shah', 'Birendra Bir Bikram Shah', 'Gyanendra Bir Bikram Shah', 'Mahendra Bir Bikram Shah'],
      correctAnswer: 0,
    },
    {
      id: 2,
      type: 'multiple-choice',
      question: 'Hello Question?',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      correctAnswer: 0,
    },
    {
      id: 3,
      type: 'fill-blank',
      question: 'Type your answer',
      correctAnswer: 'sample answer',
    },
    {
      id: 4,
      type: 'multiple-choice',
      question: 'What is the capital of Nepal?',
      options: ['Pokhara', 'Kathmandu', 'Biratnagar', 'Lalitpur'],
      correctAnswer: 1,
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answer, index) => {
    if (currentQuestion.type === 'multiple-choice') {
      setSelectedAnswer(index);
      setAnswers(prev => ({ ...prev, [currentQuestion.id]: index }));
    } else {
      setSelectedAnswer(answer);
      setAnswers(prev => ({ ...prev, [currentQuestion.id]: answer }));
    }
  };

  const handleNext = () => {
    if (currentQuestion.type === 'multiple-choice' && selectedAnswer === '') {
      Alert.alert('Error', 'Please select an answer');
      return;
    }

    if (currentQuestion.type === 'fill-blank' && !selectedAnswer.trim()) {
      Alert.alert('Error', 'Please enter your answer');
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer('');
    } else {
      // Quiz completed
      const correctAnswers = questions.reduce((count, q, index) => {
        if (q.type === 'multiple-choice') {
          return count + (answers[q.id] === q.correctAnswer ? 1 : 0);
        } else {
          return count + (answers[q.id]?.toLowerCase().includes(q.correctAnswer.toLowerCase()) ? 1 : 0);
        }
      }, 0);

      const score = Math.round((correctAnswers / questions.length) * 100);

      Alert.alert(
        'Quiz Completed!',
        `Your score: ${score}%\nCorrect answers: ${correctAnswers}/${questions.length}`,
        [
          {
            text: 'View Results',
            onPress: () => navigation.navigate('Result', { quizResults: { score, correctAnswers, totalQuestions: questions.length } }),
          },
          {
            text: 'Back to Dashboard',
            onPress: () => navigation.navigate('StudentDashboard'),
          },
        ]
      );
    }
  };

  const renderQuestion = () => {
    if (currentQuestion.type === 'multiple-choice') {
      return (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  selectedAnswer === index && styles.selectedOption
                ]}
                onPress={() => handleAnswerSelect(option, index)}
              >
                <Text style={[
                  styles.optionText,
                  selectedAnswer === index && styles.selectedOptionText
                ]}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your answer here..."
            value={selectedAnswer}
            onChangeText={handleAnswerSelect}
            multiline
            numberOfLines={3}
          />
        </View>
      );
    }
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
        <Text style={styles.headerTitle}>QUIZ</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          Question {currentQuestionIndex + 1} of {questions.length}
        </Text>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }
            ]} 
          />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {renderQuestion()}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next'}
          </Text>
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
  progressContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  progressText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  questionContainer: {
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
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 25,
    textAlign: 'center',
    lineHeight: 24,
  },
  optionsContainer: {
    gap: 15,
  },
  optionButton: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  selectedOption: {
    borderColor: '#2196F3',
    backgroundColor: '#e3f2fd',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  selectedOptionText: {
    color: '#2196F3',
    fontWeight: '600',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    textAlignVertical: 'top',
    minHeight: 100,
  },
  footer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  nextButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default QuizScreen;
