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

const NoticeScreen = ({ navigation, route }) => {
  const [notice, setNotice] = useState('');
  const [isTeacher] = useState(route.params?.role === 'teacher');

  const notices = [
    {
      id: 1,
      title: 'Annual Sports Day',
      content: 'Annual Sports Day will be held on 15th December 2024. All students are requested to participate actively.',
      date: '2024-12-01',
      author: 'Principal',
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting',
      content: 'Parent-Teacher meeting scheduled for 20th December 2024 at 2:00 PM. All parents are requested to attend.',
      date: '2024-12-05',
      author: 'Vice Principal',
    },
    {
      id: 3,
      title: 'Holiday Notice',
      content: 'School will remain closed on 25th December 2024 for Christmas holiday.',
      date: '2024-12-10',
      author: 'Administration',
    },
  ];

  const handleSendNotice = () => {
    if (!notice.trim()) {
      Alert.alert('Error', 'Please enter notice content');
      return;
    }

    Alert.alert(
      'Notice Sent',
      'Your notice has been sent successfully to all students!',
      [
        {
          text: 'OK',
          onPress: () => {
            setNotice('');
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
        <Text style={styles.headerTitle}>NOTICE AND EVENTS</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {isTeacher ? (
          <View style={styles.formContainer}>
            <Text style={styles.sectionTitle}>Send New Notice</Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Notice Content</Text>
              <TextInput
                style={styles.noticeInput}
                value={notice}
                onChangeText={setNotice}
                placeholder="Type your notice here... Include important details like date, time, and venue if applicable."
                multiline
                numberOfLines={6}
                textAlignVertical="top"
              />
              <Text style={styles.characterCount}>
                {notice.length}/500 characters
              </Text>
            </View>

            <TouchableOpacity style={styles.sendButton} onPress={handleSendNotice}>
              <MaterialIcons name="send" size={24} color="#fff" />
              <Text style={styles.sendButtonText}>Send Notice</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.noticesContainer}>
            <Text style={styles.sectionTitle}>Recent Notices</Text>
            {notices.map((noticeItem) => (
              <View key={noticeItem.id} style={styles.noticeItem}>
                <View style={styles.noticeHeader}>
                  <Text style={styles.noticeTitle}>{noticeItem.title}</Text>
                  <Text style={styles.noticeDate}>{noticeItem.date}</Text>
                </View>
                <Text style={styles.noticeContent}>{noticeItem.content}</Text>
                <Text style={styles.noticeAuthor}>- {noticeItem.author}</Text>
              </View>
            ))}
          </View>
        )}
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
  noticesContainer: {
    gap: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
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
  noticeInput: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    minHeight: 120,
  },
  characterCount: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
    marginTop: 5,
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
  noticeItem: {
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
  noticeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  noticeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  noticeDate: {
    fontSize: 14,
    color: '#666',
  },
  noticeContent: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 15,
  },
  noticeAuthor: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'right',
  },
});

export default NoticeScreen;
