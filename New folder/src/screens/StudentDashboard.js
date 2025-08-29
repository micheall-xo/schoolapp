import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const StudentDashboard = ({ navigation }) => {
  const menuItems = [
    {
      id: 1,
      title: 'Attendance',
      icon: 'check-circle',
      color: '#4CAF50',
      screen: 'Attendance',
    },
    {
      id: 2,
      title: 'Homework',
      icon: 'assignment',
      color: '#2196F3',
      screen: 'Homework',
    },
    {
      id: 3,
      title: 'Result',
      icon: 'assessment',
      color: '#FF9800',
      screen: 'Result',
    },
    {
      id: 4,
      title: 'Notice',
      icon: 'announcement',
      color: '#9C27B0',
      screen: 'Notice',
    },
    {
      id: 5,
      title: 'Ask Question',
      icon: 'help',
      color: '#F44336',
      screen: 'AskQuestion',
    },
    {
      id: 6,
      title: 'Quiz',
      icon: 'quiz',
      color: '#607D8B',
      screen: 'QuizStart',
    },
  ];

  const handleMenuPress = (screen) => {
    navigation.navigate(screen);
  };

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'RoleSelection' }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <MaterialIcons name="person" size={30} color="#fff" />
          <Text style={styles.headerTitle}>Student Dashboard</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <MaterialIcons name="logout" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.menuGrid}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={() => handleMenuPress(item.screen)}
            >
              <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                <MaterialIcons name={item.icon} size={30} color="#fff" />
              </View>
              <Text style={styles.menuTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.quickActions}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <TouchableOpacity 
            style={styles.quickActionButton}
            onPress={() => navigation.navigate('StudentProfile')}
          >
            <MaterialIcons name="person" size={24} color="#2196F3" />
            <Text style={styles.quickActionText}>View Profile</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.quickActionButton}
            onPress={() => navigation.navigate('QuestionList')}
          >
            <MaterialIcons name="question-answer" size={24} color="#4CAF50" />
            <Text style={styles.quickActionText}>View Questions</Text>
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
    backgroundColor: '#4CAF50',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  logoutButton: {
    padding: 5,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  menuItem: {
    width: (width - 60) / 2,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  quickActions: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  quickActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  quickActionText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
});

export default StudentDashboard;
