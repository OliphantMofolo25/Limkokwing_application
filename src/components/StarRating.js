import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';

export default function StarRating({ rating, onRate, maxRating = 6 }) {
  const { theme } = useTheme();
  return (
    <View style={s.container}>
      <Text style={[s.label, { color: theme.textSecondary }]}>RATE THIS COURSE</Text>
      <View style={s.starsRow}>
        {Array.from({ length: maxRating }, (_, i) => i + 1).map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => { if (rating < maxRating) onRate(star); }}
            activeOpacity={0.7}>
            <Ionicons
              name={star <= rating ? 'star' : 'star-outline'}
              size={34}
              color={star <= rating ? theme.starActive : theme.starInactive}
            />
          </TouchableOpacity>
        ))}
      </View>
      <Text style={[s.ratingText, { color: theme.accent }]}>
        {rating === 0
          ? 'Tap a star to rate'
          : rating === maxRating
          ? `Maximum rating reached (${maxRating}/${maxRating})`
          : `${rating} / ${maxRating} stars`}
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: { alignItems: 'center', paddingVertical: 16, gap: 12 },
  label: { fontSize: 10, fontWeight: '700', letterSpacing: 2 },
  starsRow: { flexDirection: 'row', gap: 6 },
  ratingText: { fontSize: 13, fontWeight: '600' },
});
