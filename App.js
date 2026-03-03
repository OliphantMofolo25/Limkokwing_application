import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import { ThemeProvider, useTheme } from './src/theme/ThemeContext';
import HomeScreen from './src/screens/HomeScreen';
import FacultyListScreen from './src/screens/FacultyListScreen';
import CourseListScreen from './src/screens/CourseListScreen';
import CourseDetailScreen from './src/screens/CourseDetailScreen';
import CareerQuizScreen from './src/screens/CareerQuizScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BrowseStack() {
  const { theme } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.bgSurface },
        headerTintColor: theme.accent,
        headerTitleStyle: { fontWeight: '800', color: theme.textPrimary },
        headerBackTitleVisible: false,
        contentStyle: { backgroundColor: theme.bg },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Faculties" component={FacultyListScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CourseList" component={CourseListScreen}
        options={({ route }) => ({ title: route.params?.faculty?.shortName || 'Courses' })}
      />
      <Stack.Screen name="CourseDetail" component={CourseDetailScreen}
        options={({ route }) => ({ title: (route.params?.course?.name || '').substring(0, 22) + '…' })}
      />
    </Stack.Navigator>
  );
}

function AppTabs() {
  const { theme } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.tabBg,
          borderTopColor: theme.tabBorder,
          borderTopWidth: 1,
          height: 64,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: theme.tabActive,
        tabBarInactiveTintColor: theme.tabInactive,
        tabBarLabelStyle: { fontSize: 11, fontWeight: '700', letterSpacing: 0.3 },
        tabBarIcon: ({ focused, color }) => {
          const icons = {
            Browse: focused ? 'home' : 'home-outline',
            CareerQuiz: focused ? 'help-circle' : 'help-circle-outline',
          };
          return <Ionicons name={icons[route.name]} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Browse" component={BrowseStack} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="CareerQuiz" component={CareerQuizScreen} options={{ tabBarLabel: 'Career Quiz' }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppTabs />
      </NavigationContainer>
    </ThemeProvider>
  );
}
