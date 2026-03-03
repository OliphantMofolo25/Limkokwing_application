import React, { useRef, useEffect } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, SafeAreaView, StatusBar, Image, Animated,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';
import { faculties } from '../data/courses';

const { width, height } = Dimensions.get('window');
const isSmallDevice = width < 375;

export default function HomeScreen({ navigation }) {
  const { theme, isDark } = useTheme();
  const totalCourses = faculties.reduce((sum, f) => sum + f.courses.length, 0);

 
  const darkOpacity = useRef(new Animated.Value(isDark ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(darkOpacity, {
      toValue: isDark ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [isDark]);

  const lightOpacity = darkOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });


  const featuredFaculty = faculties[0];

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: theme.bg }]}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      
     
      <View style={[s.header, { backgroundColor: theme.bgSurface, borderBottomColor: theme.border }]}>
        <TouchableOpacity style={s.headerLeft} activeOpacity={0.7}>
          <View style={s.headerLogoContainer}>
            <Animated.View style={[s.headerLogoLayer, { opacity: darkOpacity }]}>
              <Image
                source={require('../../assets/Dark_Mode_Logo.png')}
                style={s.headerLogo}
                resizeMode="contain"
              />
            </Animated.View>
            <Animated.View style={[s.headerLogoLayer, { opacity: lightOpacity }]}>
              <Image
                source={require('../../assets/Light_Mode_Logo.jpg')}
                style={s.headerLogo}
                resizeMode="contain"
              />
            </Animated.View>
          </View>
        </TouchableOpacity>
        
        <View style={s.headerCenter}>
          <Text style={[s.headerTitle, { color: theme.textPrimary }]} numberOfLines={1}>
            Limkokwing
          </Text>
        </View>
        
        <View style={s.headerRight}>
          <ThemeToggle />
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={s.scrollContent}
        bounces={true}
        overScrollMode="never"
      >

      
        <View style={[s.spotlightCard, { backgroundColor: theme.bgSurface }]}>
          <View style={s.spotlightContent}>
            <View style={s.spotlightText}>
              <Text style={[s.spotlightLabel, { color: theme.accent }]}>SPOTLIGHT</Text>
              <Text style={[s.spotlightTitle, { color: theme.textPrimary }]} numberOfLines={2}>
                {featuredFaculty.name}
              </Text>
              <Text style={[s.spotlightDesc, { color: theme.textMuted }]} numberOfLines={2}>
                {featuredFaculty.courses.length} cutting-edge programs available
              </Text>
              <TouchableOpacity 
                style={[s.spotlightBtn, { backgroundColor: theme.accent }]}
                onPress={() => navigation.navigate('CourseList', { faculty: featuredFaculty })}
                activeOpacity={0.8}>
                <Text style={[
                  s.spotlightBtnText, 
                  { color: isDark ? '#000000' : '#ffffff' }
                ]}>Explore</Text>
                <Ionicons 
                  name="arrow-forward" 
                  size={14} 
                  color={isDark ? '#000000' : '#ffffff'} 
                />
              </TouchableOpacity>
            </View>
            <View style={[s.spotlightIcon, { backgroundColor: theme.accent + '20' }]}>
              <Ionicons name={featuredFaculty.icon} size={isSmallDevice ? 36 : 40} color={theme.accent} />
            </View>
          </View>
        </View>

      
        <View style={s.statsWrapper}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={s.statsContainer}
            decelerationRate="fast"
            snapToInterval={110}
          >
            {[
              { icon: 'school-outline', value: `${faculties.length}`, label: 'Faculties' },
              { icon: 'book-outline', value: `${totalCourses}`, label: 'Courses' },
              { icon: 'globe-outline', value: '150+', label: 'Countries' },
              { icon: 'people-outline', value: '30K+', label: 'Students' },
              { icon: 'trophy-outline', value: '50+', label: 'Awards' },
              { icon: 'calendar-outline', value: '1991', label: 'Established' },
            ].map((stat, i) => (
              <View key={i} style={[s.statPill, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
                <Ionicons name={stat.icon} size={14} color={theme.accent} />
                <Text style={[s.statPillValue, { color: theme.textPrimary }]}>{stat.value}</Text>
                <Text style={[s.statPillLabel, { color: theme.textMuted }]}>{stat.label}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Quick Actions - Two buttons side by side */}
        <View style={s.quickActionsContainer}>
          <View style={s.quickActionsRow}>
            <TouchableOpacity
              style={[s.actionSquare, { backgroundColor: theme.bgCard, borderColor: theme.border }]}
              onPress={() => navigation.navigate('Faculties')}
              activeOpacity={0.7}>
              <View style={[s.actionSquareIcon, { backgroundColor: theme.accent + '20' }]}>
                <Ionicons name="grid" size={22} color={theme.accent} />
              </View>
              <Text style={[s.actionSquareLabel, { color: theme.textPrimary }]}>Faculties</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[s.actionSquare, { backgroundColor: theme.bgCard, borderColor: theme.border }]}
              onPress={() => navigation.navigate('CareerQuiz')}
              activeOpacity={0.7}>
              <View style={[s.actionSquareIcon, { backgroundColor: theme.accent + '20' }]}>
                <Ionicons name="compass" size={22} color={theme.accent} />
              </View>
              <Text style={[s.actionSquareLabel, { color: theme.textPrimary }]}>Career Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>

   
        <View style={s.facultiesSection}>
          <View style={s.sectionHeaderRow}>
            <Text style={[s.sectionHeaderTitle, { color: theme.textPrimary }]}>Our Faculties</Text>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Faculties')}
              activeOpacity={0.7}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Text style={[s.sectionHeaderLink, { color: theme.accent }]}>See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={s.facultiesHorizontal}
            decelerationRate="fast"
            snapToInterval={170}
          >
            {faculties.map((f) => {
              const ac = theme.faculty[f.id] || theme.accent;
              return (
                <TouchableOpacity
                  key={f.id}
                  style={[s.facultyCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}
                  onPress={() => navigation.navigate('CourseList', { faculty: f })}
                  activeOpacity={0.7}>
                  <View style={[s.facultyCardIcon, { backgroundColor: ac + '20' }]}>
                    <Ionicons name={f.icon} size={24} color={ac} />
                  </View>
                  <Text style={[s.facultyCardName, { color: theme.textPrimary }]} numberOfLines={2}>
                    {f.name}
                  </Text>
                  <Text style={[s.facultyCardCount, { color: theme.textMuted }]}>
                    {f.courses.length} courses
                  </Text>
                  <View style={s.facultyCardArrow}>
                    <Ionicons name="arrow-forward-circle" size={18} color={ac} />
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <View style={[s.aboutCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
          <View style={s.aboutHeader}>
            <View style={[s.aboutIcon, { backgroundColor: theme.accent + '20' }]}>
              <Ionicons name="information" size={18} color={theme.accent} />
            </View>
            <Text style={[s.aboutHeaderText, { color: theme.textPrimary }]}>About University</Text>
          </View>
          
          <Text style={[s.aboutDescription, { color: theme.textSecondary }]} numberOfLines={3}>
            Located in Maseru, LUCT offers cutting-edge programmes across design, technology,
            business and communication. Over 30,000 creative minds from 150+ countries.
          </Text>

          <View style={[s.contactDivider, { borderTopColor: theme.border }]} />

          <View style={s.contactInfo}>
            <View style={s.contactRow}>
              <Ionicons name="call-outline" size={12} color={theme.accent} />
              <Text style={[s.contactText, { color: theme.textSecondary }]} numberOfLines={1}>
                +266 2231 5767
              </Text>
            </View>
            <View style={s.contactRow}>
              <Ionicons name="globe-outline" size={12} color={theme.accent} />
              <Text style={[s.contactText, { color: theme.textSecondary }]} numberOfLines={1}>
                www.limkokwing.ac.ls
              </Text>
            </View>
          </View>
        </View>

        
        <View style={{ height: isSmallDevice ? 20 : 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { 
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 10,
  },


  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    height: 56,
  },
  headerLeft: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
  },
  headerLogoContainer: {
    width: 45,
    height: 28,
    position: 'relative',
  },
  headerLogoLayer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLogo: {
    width: '100%',
    height: '100%',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  headerRight: {
    width: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },


  spotlightCard: {
    marginHorizontal: 12,
    marginTop: 12,
    marginBottom: 8,
    borderRadius: 20,
    padding: 14,
  },
  spotlightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  spotlightText: {
    flex: 1,
    marginRight: 12,
  },
  spotlightLabel: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  spotlightTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 4,
    lineHeight: 22,
  },
  spotlightDesc: {
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 16,
  },
  spotlightBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 18,
    gap: 4,
  },
  spotlightBtnText: {
    fontSize: 12,
    fontWeight: '600',
  },
  spotlightIcon: {
    width: 65,
    height: 65,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },


  statsWrapper: {
    marginBottom: 16,
    height: 50,
  },
  statsContainer: {
    paddingHorizontal: 12,
    gap: 8,
    alignItems: 'center',
  },
  statPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 25,
    borderWidth: 1,
    gap: 4,
    height: 38,
  },
  statPillValue: {
    fontSize: 12,
    fontWeight: '600',
  },
  statPillLabel: {
    fontSize: 10,
  },

 
  quickActionsContainer: {
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  actionSquare: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    padding: 12,
    alignItems: 'center',
    minHeight: 90,
    justifyContent: 'center',
  },
  actionSquareIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  actionSquareLabel: {
    fontSize: 12,
    fontWeight: '600',
  },

  // Faculties Section
  facultiesSection: {
    marginBottom: 20,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  sectionHeaderTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  sectionHeaderLink: {
    fontSize: 12,
    fontWeight: '500',
  },
  facultiesHorizontal: {
    paddingHorizontal: 12,
    gap: 10,
  },
  facultyCard: {
    width: 150,
    padding: 12,
    borderRadius: 18,
    borderWidth: 1,
  },
  facultyCardIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  facultyCardName: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 4,
    height: 34,
    lineHeight: 16,
  },
  facultyCardCount: {
    fontSize: 11,
    marginBottom: 8,
  },
  facultyCardArrow: {
    alignItems: 'flex-end',
  },

  // About - Compact
  aboutCard: {
    marginHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    padding: 14,
  },
  aboutHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  aboutIcon: {
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutHeaderText: {
    fontSize: 14,
    fontWeight: '600',
  },
  aboutDescription: {
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 10,
  },
  contactDivider: {
    borderTopWidth: 1,
    marginBottom: 10,
  },
  contactInfo: {
    gap: 6,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  contactText: {
    fontSize: 11,
  },
});