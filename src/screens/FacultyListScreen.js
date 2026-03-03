import React from 'react';
import {
  View, Text, ScrollView, StyleSheet, SafeAreaView, StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';
import FacultyCard from '../components/FacultyCard';
import { faculties } from '../data/courses';

export default function FacultyListScreen({ navigation }) {
  const { theme, isDark } = useTheme();
  
  return (
    <SafeAreaView style={[s.safe, { backgroundColor: theme.bg }]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={theme.bg} />
      
      {/* Header with Back Button */}
      <View style={[s.header, { borderBottomColor: theme.border }]}>
        <View style={s.headerLeft}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()} 
            style={[s.backButton, { backgroundColor: theme.bgSurface }]}
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-back" size={20} color={theme.textPrimary} />
          </TouchableOpacity>
        </View>
        
        <View style={s.headerCenter}>
          <Text style={[s.title, { color: theme.textPrimary }]}>Faculties</Text>
          <Text style={[s.sub, { color: theme.textSecondary }]}>
            {faculties.length} faculties — choose your path
          </Text>
        </View>
        
        <View style={s.headerRight}>
          <ThemeToggle />
        </View>
      </View>

      <ScrollView contentContainerStyle={s.grid} showsVerticalScrollIndicator={false}>
        {faculties.map((f) => (
          <FacultyCard
            key={f.id}
            faculty={f}
            onPress={() => navigation.navigate('CourseList', { faculty: f })}
          />
        ))}
        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 70,
  },
  headerLeft: {
    width: 40,
    alignItems: 'flex-start',
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerRight: {
    width: 40,
    alignItems: 'flex-end',
  },
  title: { 
    fontSize: 20, 
    fontWeight: '800', 
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  sub: { 
    fontSize: 11, 
    marginTop: 2,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
    paddingHorizontal: 12, 
    paddingTop: 16, 
    justifyContent: 'space-between',
  },
});