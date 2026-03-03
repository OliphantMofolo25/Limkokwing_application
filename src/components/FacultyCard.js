import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';

export default function FacultyCard({ faculty, onPress }) {
  const { theme } = useTheme();
  const ac = theme.faculty[faculty.id] || theme.accent;
  return (
    <TouchableOpacity
      style={[s.card, { backgroundColor: theme.bgCard, borderColor: ac }]}
      onPress={onPress}
      activeOpacity={0.85}>
      <View style={[s.iconCircle, { backgroundColor: ac + '18' }]}>
        <Ionicons name={faculty.icon} size={28} color={ac} />
      </View>
      <Text style={[s.name, { color: theme.textPrimary }]} numberOfLines={2}>
        {faculty.name}
      </Text>
      <Text style={[s.count, { color: theme.textSecondary }]}>
        {faculty.courses.length} courses
      </Text>
      <View style={[s.arrowBtn, { backgroundColor: ac }]}>
        <Ionicons name="chevron-forward" size={13} color={theme.bg} />
      </View>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  card: {
    borderRadius: 16, borderWidth: 1.5, padding: 18,
    width: '47%', marginBottom: 14, position: 'relative',
  },
  iconCircle: {
    width: 52, height: 52, borderRadius: 26,
    alignItems: 'center', justifyContent: 'center', marginBottom: 12,
  },
  name: { fontSize: 13, fontWeight: '700', lineHeight: 18, marginBottom: 4 },
  count: { fontSize: 11 },
  arrowBtn: {
    position: 'absolute', top: 12, right: 12,
    width: 22, height: 22, borderRadius: 11,
    alignItems: 'center', justifyContent: 'center',
  },
});
