import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';

export default function VideoPlaceholder({ courseName }) {
  const { theme } = useTheme();
  return (
    <View style={[s.container, { backgroundColor: theme.bgSurface, borderColor: theme.border }]}>
      {/*
        TODO: Replace with expo-av Video:
        import { Video } from 'expo-av';
        <Video
          source={require('../../assets/videos/YOUR_VIDEO.mp4')}
          style={{ width: '100%', height: 200, borderRadius: 12 }}
          useNativeControls
          resizeMode="contain"
        />
      */}
      <Ionicons name="play-circle-outline" size={48} color={theme.accentMuted} />
      <Text style={[s.title, { color: theme.textPrimary }]}>Video Placeholder</Text>
      <Text style={[s.sub, { color: theme.textSecondary }]}>{courseName}</Text>
      <View style={[s.badge, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
        <Text style={[s.badgeText, { color: theme.textMuted }]}>
          Add video to assets/videos/
        </Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    width: '100%', height: 200, borderRadius: 12,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 1.5, borderStyle: 'dashed', gap: 6,
  },
  title: { fontSize: 15, fontWeight: '700' },
  sub: { fontSize: 12, textAlign: 'center', paddingHorizontal: 20 },
  badge: { paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, marginTop: 4, borderWidth: 1 },
  badgeText: { fontSize: 10, fontWeight: '600' },
});
