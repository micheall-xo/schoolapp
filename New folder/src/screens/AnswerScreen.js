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

const AnswerScreen = ({ navigation, route }) => {
  const { question } = route.params || {};
  
  const answer = {
    content: `To solve quadratic equations, you need to follow these steps:

1. **Standard Form**: First, make sure your equation is in the standard form: ax² + bx + c = 0, where a, b, and c are real numbers and a ≠ 0.

2. **Identify Coefficients**: Identify the values of a, b, and c from your equation.

3. **Choose a Method**: You can use several methods:
   - **Factoring**: If the quadratic can be factored easily
   - **Quadratic Formula**: x = (-b ± √(b² - 4ac)) / (2a)
   - **Completing the Square**: Convert to vertex form
   - **Graphing**: Plot the function and find x-intercepts

4. **Example with Factoring**:
   For x² + 5x + 6 = 0:
   - Find factors of 6 that add to 5: 2 and 3
   - Factor: (x + 2)(x + 3) = 0
   - Set each factor to zero: x + 2 = 0 or x + 3 = 0
   - Solve: x = -2 or x = -3

5. **Example with Quadratic Formula**:
   For 2x² - 4x - 6 = 0:
   - a = 2, b = -4, c = -6
   - x = (-(-4) ± √((-4)² - 4(2)(-6))) / (2(2))
   - x = (4 ± √(16 + 48)) / 4
   - x = (4 ± √64) / 4
   - x = (4 ± 8) / 4
   - x = 3 or x = -1

6. **Check Your Answers**: Always substitute your solutions back into the original equation to verify they work.

Remember: The discriminant (b² - 4ac) tells you about the nature of the roots:
- If positive: Two real roots
- If zero: One real root (repeated)
- If negative: Two complex roots`,
    author: 'Dr. Smith',
    date: '2024-12-01',
    subject: 'Mathematics',
  };

  const handleDownload = () => {
    Alert.alert(
      'Download Answer',
      'Your answer has been downloaded successfully!',
      [{ text: 'OK' }]
    );
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBack}
        >
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ANSWER</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.questionContainer}>
          <Text style={styles.questionTitle}>Question</Text>
          <Text style={styles.questionText}>{question?.title || 'Mathematics Problem'}</Text>
          <Text style={styles.questionDescription}>
            {question?.description || 'I need help with solving quadratic equations. Can someone explain the steps?'}
          </Text>
          
          <View style={styles.questionMeta}>
            <View style={styles.metaItem}>
              <MaterialIcons name="school" size={16} color="#666" />
              <Text style={styles.metaText}>{question?.subject || 'Mathematics'}</Text>
            </View>
            <View style={styles.metaItem}>
              <MaterialIcons name="schedule" size={16} color="#666" />
              <Text style={styles.metaText}>{question?.date || '2024-12-01'}</Text>
            </View>
          </View>
        </View>

        <View style={styles.answerContainer}>
          <Text style={styles.answerTitle}>Answer</Text>
          
          <View style={styles.answerHeader}>
            <View style={styles.authorInfo}>
              <MaterialIcons name="person" size={20} color="#2196F3" />
              <Text style={styles.authorName}>{answer.author}</Text>
            </View>
            <Text style={styles.answerDate}>{answer.date}</Text>
          </View>

          <Text style={styles.answerContent}>{answer.content}</Text>

          <View style={styles.answerFooter}>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>Was this answer helpful?</Text>
              <View style={styles.ratingButtons}>
                <TouchableOpacity style={styles.ratingButton}>
                  <MaterialIcons name="thumb-up" size={20} color="#4CAF50" />
                  <Text style={styles.ratingButtonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ratingButton}>
                  <MaterialIcons name="thumb-down" size={20} color="#F44336" />
                  <Text style={styles.ratingButtonText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
          <MaterialIcons name="download" size={24} color="#fff" />
          <Text style={styles.downloadButtonText}>Download Answer</Text>
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
    padding: 20,
  },
  questionContainer: {
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
  questionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 10,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    lineHeight: 24,
  },
  questionDescription: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginBottom: 15,
  },
  questionMeta: {
    flexDirection: 'row',
    gap: 20,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  metaText: {
    fontSize: 14,
    color: '#666',
  },
  answerContainer: {
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
  answerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 10,
  },
  answerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2196F3',
  },
  answerDate: {
    fontSize: 14,
    color: '#666',
  },
  answerContent: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 20,
  },
  answerFooter: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 15,
  },
  ratingContainer: {
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  ratingButtons: {
    flexDirection: 'row',
    gap: 20,
  },
  ratingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  ratingButtonText: {
    fontSize: 14,
    color: '#333',
  },
  footer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
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

export default AnswerScreen;
