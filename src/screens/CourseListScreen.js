import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';
import CourseCard from '../components/CourseCard';

export default function CourseListScreen({ route, navigation }) {
  const { faculty } = route.params;
  const { theme, isDark } = useTheme();
  const [ratings, setRatings] = useState({});
  const ac = theme.faculty[faculty.id] || theme.accent;

  useEffect(() => {
    AsyncStorage.getItem('luct_ratings').then((v) => {
      if (v) setRatings(JSON.parse(v));
    });
  }, []);

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: theme.bg }]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={theme.bg} />
      <View style={[s.facultyHeader, { backgroundColor: theme.bgSurface, borderBottomColor: ac }]}>
        <View style={[s.iconWrap, { backgroundColor: ac + '18' }]}>
          <Ionicons name={faculty.icon} size={22} color={ac} />
        </View>
        <View style={s.headerText}>
          <Text style={[s.facultyName, { color: theme.textPrimary }]}>{faculty.name}</Text>
          <Text style={[s.sub, { color: theme.textSecondary }]}>
            {faculty.courses.length} courses available
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[s.desc, { color: theme.textSecondary }]}>{faculty.description}</Text>
        <Text style={[s.sectionLabel, { color: theme.textMuted }]}>ALL COURSES</Text>
        <View style={{ paddingHorizontal: 16 }}>
          {faculty.courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              facultyId={faculty.id}
              rating={ratings[course.id] || 0}
              onPress={() =>
                navigation.navigate('CourseDetail', {
                  course,
                  facultyId: faculty.id,
                  facultyName: faculty.name,
                })
              }
            />
          ))}
        </View>
        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1 },
  facultyHeader: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 20, paddingVertical: 16,
    gap: 12, borderBottomWidth: 2,
  },
  iconWrap: {
    width: 46, height: 46, borderRadius: 23,
    alignItems: 'center', justifyContent: 'center',
  },
  headerText: { flex: 1 },
  facultyName: { fontSize: 14, fontWeight: '800', lineHeight: 20 },
  sub: { fontSize: 11, marginTop: 2 },
  desc: { fontSize: 13, lineHeight: 20, margin: 20, marginBottom: 6 },
  sectionLabel: {
    fontSize: 10, fontWeight: '700', letterSpacing: 2,
    marginHorizontal: 20, marginBottom: 10,
  },
});
