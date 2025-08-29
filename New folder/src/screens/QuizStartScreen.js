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

const QuizStartScreen = ({ navigation }) => {
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

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="help" size={120} color="#2196F3" />
        </View>
        
        <View style={styles.personIconContainer}>
          <MaterialIcons name="person" size={60} color="#666" />
        </View>

        <Text style={styles.title}>Ready to Start Quiz?</Text>
        <Text style={styles.subtitle}>
          Test your knowledge with our interactive quiz. Answer questions and see how well you perform!
        </Text>

        <View style={styles.quizInfo}>
          <View style={styles.infoItem}>
            <MaterialIcons name="quiz" size={24} color="#4CAF50" />
            <Text style={styles.infoText}>4 Questions</Text>
          </View>
          <View style={styles.infoItem}>
            <MaterialIcons name="timer" size={24} color="#FF9800" />
            <Text style={styles.infoText}>No Time Limit</Text>
          </View>
          <View style={styles.infoItem}>
            <MaterialIcons name="assessment" size={24} color="#9C27B0" />
            <Text style={styles.infoText}>Get Results</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.startButton}
          onPress={() => navigation.navigate('Quiz')}
        >
          <Text style={styles.startButtonText}>Start Quiz</Text>
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
  content: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 30,
  },
  personIconContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  quizInfo: {
    width: '100%',
    marginBottom: 50,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
    fontWeight: '500',
  },
  startButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default QuizStartScreen;
