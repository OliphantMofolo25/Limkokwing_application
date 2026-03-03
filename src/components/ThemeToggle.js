import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme, theme } = useTheme();
  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={[s.btn, { backgroundColor: theme.bgCard, borderColor: theme.border }]}
      activeOpacity={0.8}>
      <Ionicons
        name={isDark ? 'sunny-outline' : 'moon-outline'}
        size={14}
        color={theme.textSecondary}
      />
      <Text style={[s.label, { color: theme.textSecondary }]}>
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  btn: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    paddingHorizontal: 12, paddingVertical: 7,
    borderRadius: 20, borderWidth: 1,
  },
  label: { fontSize: 12, fontWeight: '600' },
});
