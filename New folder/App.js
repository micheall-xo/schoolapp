import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

// Import screens
import SplashScreen from './src/screens/SplashScreen';
import RoleSelectionScreen from './src/screens/RoleSelectionScreen';
import LoginScreen from './src/screens/LoginScreen';
import TeacherDashboard from './src/screens/TeacherDashboard';
import StudentDashboard from './src/screens/StudentDashboard';
import HomeworkScreen from './src/screens/HomeworkScreen';
import AttendanceScreen from './src/screens/AttendanceScreen';
import ResultScreen from './src/screens/ResultScreen';
import AddMarksScreen from './src/screens/AddMarksScreen';
import NoticeScreen from './src/screens/NoticeScreen';
import SolutionScreen from './src/screens/SolutionScreen';
import StudentProfileScreen from './src/screens/StudentProfileScreen';
import QuestionListScreen from './src/screens/QuestionListScreen';
import AskQuestionScreen from './src/screens/AskQuestionScreen';
import AnswerScreen from './src/screens/AnswerScreen';
import QuizStartScreen from './src/screens/QuizStartScreen';
import QuizScreen from './src/screens/QuizScreen';
import FormScreen from './src/screens/FormScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator 
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#f5f5f5' }
          }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="TeacherDashboard" component={TeacherDashboard} />
          <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
          <Stack.Screen name="Homework" component={HomeworkScreen} />
          <Stack.Screen name="Attendance" component={AttendanceScreen} />
          <Stack.Screen name="Result" component={ResultScreen} />
          <Stack.Screen name="AddMarks" component={AddMarksScreen} />
          <Stack.Screen name="Notice" component={NoticeScreen} />
          <Stack.Screen name="Solution" component={SolutionScreen} />
          <Stack.Screen name="StudentProfile" component={StudentProfileScreen} />
          <Stack.Screen name="QuestionList" component={QuestionListScreen} />
          <Stack.Screen name="AskQuestion" component={AskQuestionScreen} />
          <Stack.Screen name="Answer" component={AnswerScreen} />
          <Stack.Screen name="QuizStart" component={QuizStartScreen} />
          <Stack.Screen name="Quiz" component={QuizScreen} />
          <Stack.Screen name="Form" component={FormScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
