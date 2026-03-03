import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';

export default function CourseCard({ course, facultyId, rating, onPress }) {
  const { theme } = useTheme();
  const ac = theme.faculty[facultyId] || theme.accent;
  
  return (
    <TouchableOpacity
      style={[s.card, { backgroundColor: theme.bgCard, borderColor: theme.border }]}
      onPress={onPress}
      activeOpacity={0.7}>
      
    
      <View style={[s.iconCircle, { backgroundColor: ac + '15' }]}>
        <Ionicons name="book-outline" size={18} color={ac} />
      </View>

     
      <View style={s.contentContainer}>
 
        <View style={s.titleRow}>
          <Text style={[s.courseName, { color: theme.textPrimary }]} numberOfLines={1}>
            {course.name}
          </Text>
          <View style={[s.levelPill, { backgroundColor: ac + '10' }]}>
            <Text style={[s.levelPillText, { color: ac }]}>{course.level}</Text>
          </View>
        </View>

     
        <View style={s.detailsRow}>
         
          <View style={s.detailItem}>
            <Ionicons name="time-outline" size={11} color={theme.textMuted} />
            <Text style={[s.detailText, { color: theme.textMuted }]}>{course.duration}</Text>
          </View>

          
          <View style={s.detailItem}>
            <Ionicons name="star" size={11} color={theme.starActive} />
            <Text style={[s.detailText, { color: theme.textPrimary }]}>{rating}/6</Text>
          </View>

        
          <View style={s.detailItem}>
            <Ionicons name="people-outline" size={11} color={theme.textMuted} />
            <Text style={[s.detailText, { color: theme.textMuted }]}>24</Text>
          </View>
        </View>
      </View>

     
      <Ionicons name="chevron-forward" size={16} color={theme.textMuted} />
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 8,
    marginHorizontal: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
    gap: 6,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  courseName: {
    fontSize: 15,
    fontWeight: '600',
    flex: 1,
  },
  levelPill: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  levelPillText: {
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailText: {
    fontSize: 11,
    fontWeight: '500',
  },
});