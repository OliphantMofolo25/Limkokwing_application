import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, ScrollView, StyleSheet, SafeAreaView,
  StatusBar, TouchableOpacity, Alert, Image,
  FlatList, Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';
import { VideoView, useVideoPlayer } from 'expo-video';

const MAX = 6;
const { width } = Dimensions.get('window');

// InfoCard component
const InfoCard = ({ theme, icon, label, children }) => {
  return (
    <View style={[styles.infoCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
      <View style={styles.infoCardHeader}>
        <Ionicons name={icon} size={12} color={theme.textMuted} />
        <Text style={[styles.infoCardLabel, { color: theme.textMuted }]}>{label}</Text>
      </View>
      {children}
    </View>
  );
};

// Video Player Component
const CourseVideo = ({ source, theme }) => {
  const player = useVideoPlayer(source, (player) => {
    player.loop = false;
    player.play = false; // Don't auto-play
  });

  return (
    <View style={styles.videoContainer}>
      <VideoView
        player={player}
        style={styles.videoFrame}
        allowsFullscreen
        allowsPictureInPicture
        nativeControls
      />
    </View>
  );
};

export default function CourseDetailScreen({ route, navigation }) {
  const { course, facultyId, facultyName } = route.params;
  const { theme, isDark } = useTheme();
  const ac = theme.faculty[facultyId] || theme.accent;
  const [rating, setRating] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    loadRating();
    // Debug video data
    console.log('🎥 Video source:', course?.video);
  }, [course.id]);

  const loadRating = async () => {
    try {
      const stored = await AsyncStorage.getItem('luct_ratings');
      if (stored) {
        const ratings = JSON.parse(stored);
        setRating(ratings[course.id] || 0);
      }
    } catch (error) {
      console.log('Error loading rating:', error);
    }
  };

  const saveRating = async (val) => {
    try {
      const clamped = Math.min(val, MAX);
      setRating(clamped);
      const stored = await AsyncStorage.getItem('luct_ratings');
      const all = stored ? JSON.parse(stored) : {};
      all[course.id] = clamped;
      await AsyncStorage.setItem('luct_ratings', JSON.stringify(all));
    } catch (error) {
      console.log('Error saving rating:', error);
    }
  };

  const handleStarPress = (star) => {
    if (rating >= MAX) {
      Alert.alert('Maximum Rating', `This course already has the maximum rating of ${MAX} stars.`);
      return;
    }
    saveRating(star);
  };

  const handleRateAgain = () => {
    if (rating >= MAX) {
      Alert.alert('Maximum Rating Reached', `You cannot rate this course higher than ${MAX}/6.`);
      return;
    }
    saveRating(rating + 1);
  };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveImageIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50
  };

  const renderImageItem = ({ item }) => (
    <Image 
      source={item} 
      style={styles.courseImg} 
      resizeMode="cover"
    />
  );

  // Prepare video source
  const videoSource = course?.video 
    ? (typeof course.video === 'string' ? { uri: course.video } : course.video)
    : null;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.bg }]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={theme.bg} />
      
      {/* Simple Header with Title Only - No custom back button */}
      <View style={[styles.header, { backgroundColor: theme.bgSurface, borderBottomColor: theme.border }]}>
        <View style={styles.headerLeft} />
        <Text style={[styles.headerTitle, { color: theme.textPrimary }]} numberOfLines={1}>
          Course Details
        </Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image Section */}
        <View style={[styles.imgFrame, { backgroundColor: theme.bgSurface, borderBottomColor: theme.border }]}>
          {course.image ? (
            <>
              <FlatList
                ref={flatListRef}
                data={Array.isArray(course.image) ? course.image : [course.image]}
                renderItem={renderImageItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                keyExtractor={(item, index) => index.toString()}
              />
              
              {(Array.isArray(course.image) && course.image.length > 1) && (
                <View style={styles.paginationContainer}>
                  {course.image.map((_, index) => (
                    <View
                      key={index}
                      style={[
                        styles.paginationDot,
                        {
                          backgroundColor: index === activeImageIndex 
                            ? theme.accent 
                            : 'rgba(255, 255, 255, 0.5)',
                          width: index === activeImageIndex ? 20 : 8,
                        },
                      ]}
                    />
                  ))}
                </View>
              )}
            </>
          ) : (
            <View style={styles.imgPlaceholder}>
              <Ionicons name="images-outline" size={48} color={theme.textMuted} />
              <Text style={[styles.imgLabel, { color: theme.textMuted }]}>
                No images available
              </Text>
            </View>
          )}
        </View>

        <View style={styles.content}>
          <Text style={[styles.breadcrumb, { color: theme.textMuted }]}>{facultyName}</Text>

          <View style={[styles.levelBadge, { backgroundColor: ac + '18' }]}>
            <Text style={[styles.levelText, { color: ac }]}>{course.level?.toUpperCase() || 'N/A'}</Text>
          </View>

          <Text style={[styles.courseName, { color: theme.textPrimary }]}>{course.name}</Text>

          <View style={[styles.durationBadge, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
            <Ionicons name="time-outline" size={13} color={theme.accent} />
            <Text style={[styles.durationText, { color: theme.accent }]}>{course.duration}</Text>
          </View>

          <View style={[styles.accentLine, { backgroundColor: ac }]} />

          {/* About */}
          <InfoCard theme={theme} icon="document-text-outline" label="ABOUT THIS COURSE">
            <Text style={[styles.bodyText, { color: theme.textSecondary }]}>{course.description}</Text>
          </InfoCard>

          {/* Entry Requirements */}
          <InfoCard theme={theme} icon="checkmark-circle-outline" label="ENTRY REQUIREMENTS">
            <Text style={[styles.bodyText, { color: theme.textSecondary }]}>{course.entryRequirements}</Text>
          </InfoCard>

          {/* Career Paths */}
          <InfoCard theme={theme} icon="trending-up-outline" label="CAREER PATHS">
            <View style={styles.pillsRow}>
              {course.careerPaths?.map((p, i) => (
                <View key={i} style={[styles.pill, { borderColor: ac }]}>
                  <Text style={[styles.pillText, { color: ac }]}>{p}</Text>
                </View>
              ))}
            </View>
          </InfoCard>

          {/* VIDEO SECTION - Using expo-video */}
          <InfoCard theme={theme} icon="videocam-outline" label="COURSE VIDEO">
            {videoSource ? (
              <CourseVideo source={videoSource} theme={theme} />
            ) : (
              <View style={[styles.videoFrame, styles.videoPlaceholder, { backgroundColor: theme.bgSurface, borderColor: theme.border }]}>
                <Ionicons name="videocam-outline" size={48} color={theme.textMuted} />
                <Text style={[styles.videoSub, { color: theme.textMuted }]}>
                  No video available
                </Text>
              </View>
            )}
          </InfoCard>

          {/* Rating Section */}
          <View style={[styles.ratingCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
            <Text style={[styles.ratingTitle, { color: theme.textMuted }]}>RATE THIS COURSE</Text>

            <View style={styles.starsRow}>
              {[1, 2, 3, 4, 5, 6].map((star) => (
                <TouchableOpacity
                  key={star}
                  onPress={() => handleStarPress(star)}
                  activeOpacity={0.7}>
                  <Ionicons
                    name={star <= rating ? 'star' : 'star-outline'}
                    size={36}
                    color={star <= rating ? theme.starActive : theme.starInactive}
                  />
                </TouchableOpacity>
              ))}
            </View>

            <Text style={[styles.ratingLabel, { color: theme.accent }]}>
              {rating === 0
                ? 'Tap a star to rate'
                : rating === MAX
                ? `Maximum rating reached (${MAX}/${MAX})`
                : `${rating} / ${MAX} stars`}
            </Text>

            <TouchableOpacity
              style={[
                styles.rateAgainBtn,
                { backgroundColor: rating >= MAX ? theme.bgElevated : theme.accent },
              ]}
              onPress={handleRateAgain}
              activeOpacity={0.8}>
              <Ionicons
                name={rating >= MAX ? 'lock-closed-outline' : 'add-circle-outline'}
                size={17}
                color={rating >= MAX ? theme.textMuted : theme.textInverse}
              />
              <Text style={[
                styles.rateAgainText,
                { color: rating >= MAX ? theme.textMuted : theme.textInverse },
              ]}>
                {rating >= MAX ? `Maximum Rating (${MAX}/6)` : 'Press to Rate Again'}
              </Text>
            </TouchableOpacity>

            <Text style={[styles.ratingHint, { color: theme.textMuted }]}>
              Rating starts at 0 — increases each press — max {MAX} stars
            </Text>
          </View>
        </View>
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    height: 60,
  },
  headerLeft: {
    width: 40, // Empty view for balance
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  headerRight: {
    width: 40, // Empty view for balance
  },
  imgFrame: { 
    height: 220, 
    borderBottomWidth: 1,
  },
  courseImg: { 
    width: width, 
    height: 220,
  },
  imgPlaceholder: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 10 
  },
  imgLabel: { 
    fontSize: 12, 
    textAlign: 'center', 
    paddingHorizontal: 24 
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 8,
  },
  paginationDot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  content: { 
    padding: 20 
  },
  breadcrumb: { 
    fontSize: 11, 
    marginBottom: 8 
  },
  levelBadge: {
    paddingHorizontal: 10, 
    paddingVertical: 3,
    borderRadius: 8, 
    alignSelf: 'flex-start', 
    marginBottom: 8,
  },
  levelText: { 
    fontSize: 11, 
    fontWeight: '700', 
    letterSpacing: 1 
  },
  courseName: { 
    fontSize: 22, 
    fontWeight: '900', 
    lineHeight: 28, 
    marginBottom: 12 
  },
  durationBadge: {
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 5,
    paddingHorizontal: 12, 
    paddingVertical: 7, 
    borderRadius: 10,
    borderWidth: 1, 
    alignSelf: 'flex-start', 
    marginBottom: 16,
  },
  durationText: { 
    fontSize: 12, 
    fontWeight: '700' 
  },
  accentLine: { 
    height: 3, 
    borderRadius: 2, 
    marginBottom: 18 
  },
  bodyText: { 
    fontSize: 13, 
    lineHeight: 21 
  },
  pillsRow: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    gap: 8 
  },
  pill: { 
    borderWidth: 1.5, 
    borderRadius: 20, 
    paddingHorizontal: 12, 
    paddingVertical: 5 
  },
  pillText: { 
    fontSize: 12, 
    fontWeight: '600' 
  },
  videoContainer: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  videoFrame: {
    height: 180,
    width: '100%',
    borderRadius: 12,
  },
  videoPlaceholder: {
    borderWidth: 1.5,
    borderStyle: 'dashed',
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 8,
    height: 180,
  },
  videoSub: { 
    fontSize: 11 
  },
  ratingCard: {
    borderRadius: 16, 
    borderWidth: 1, 
    padding: 20,
    alignItems: 'center', 
    gap: 12,
  },
  ratingTitle: { 
    fontSize: 11, 
    fontWeight: '700', 
    letterSpacing: 2 
  },
  starsRow: { 
    flexDirection: 'row', 
    gap: 8 
  },
  ratingLabel: { 
    fontSize: 14, 
    fontWeight: '700' 
  },
  rateAgainBtn: {
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 8,
    paddingHorizontal: 24, 
    paddingVertical: 13, 
    borderRadius: 26,
  },
  rateAgainText: { 
    fontWeight: '800', 
    fontSize: 14 
  },
  ratingHint: { 
    fontSize: 11, 
    textAlign: 'center' 
  },
  infoCard: { 
    borderRadius: 14, 
    padding: 16, 
    marginBottom: 12, 
    borderWidth: 1, 
    gap: 10,
  },
  infoCardHeader: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 6 
  },
  infoCardLabel: { 
    fontSize: 10, 
    fontWeight: '700', 
    letterSpacing: 1.5 
  },
});