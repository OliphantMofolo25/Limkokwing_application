import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';
import { quizQuestions } from '../data/quiz';
import { faculties } from '../data/courses';

export default function CareerQuizScreen({ navigation }) {
  const { theme, isDark } = useTheme();
  const [step, setStep] = useState('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({ f1: 0, f2: 0, f3: 0, f4: 0, f5: 0 });
  const [result, setResult] = useState(null);

  const handleStart = () => {
    setStep('quiz');
    setCurrentQ(0);
    setScores({ f1: 0, f2: 0, f3: 0, f4: 0, f5: 0 });
    setResult(null);
  };

  const handleAnswer = (option) => {
    const updated = { ...scores, [option.faculty]: scores[option.faculty] + 1 };
    if (currentQ + 1 < quizQuestions.length) {
      setScores(updated);
      setCurrentQ(currentQ + 1);
    } else {
      const topId = Object.entries(updated).sort((a, b) => b[1] - a[1])[0][0];
      setResult(faculties.find((f) => f.id === topId));
      setStep('result');
    }
  };

  const restart = () => {
    setStep('intro');
    setCurrentQ(0);
    setScores({ f1: 0, f2: 0, f3: 0, f4: 0, f5: 0 });
    setResult(null);
  };

  // ── INTRO ──────────────────────────────────────────────────
  if (step === 'intro') {
    return (
      <SafeAreaView style={[s.safe, { backgroundColor: theme.bg }]}>
        <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={theme.bg} />
        <ScrollView contentContainerStyle={s.centered}>
          <View style={[s.iconCircle, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
            <Ionicons name="help-circle-outline" size={56} color={theme.accent} />
          </View>
          <Text style={[s.introTitle, { color: theme.textPrimary }]}>Career Guide Quiz</Text>
          <Text style={[s.introSub, { color: theme.textSecondary }]}>
            Find the perfect faculty for your future
          </Text>
          <Text style={[s.introDesc, { color: theme.textSecondary }]}>
            Answer {quizQuestions.length} questions about your interests and strengths.
            We will match you to the faculty that suits you best.
          </Text>
          {[
            { icon: 'flash-outline',   text: `${quizQuestions.length} quick questions`           },
            { icon: 'school-outline',  text: '5 faculty matches available'                        },
            { icon: 'ribbon-outline',  text: 'Personalised career recommendation'                 },
            { icon: 'time-outline',    text: 'Takes only 2 to 3 minutes'                          },
          ].map((f, i) => (
            <View
              key={i}
              style={[s.featureRow, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
              <Ionicons name={f.icon} size={18} color={theme.accent} />
              <Text style={[s.featureText, { color: theme.textPrimary }]}>{f.text}</Text>
            </View>
          ))}
          <TouchableOpacity
            style={[s.startBtn, { backgroundColor: theme.accent }]}
            onPress={handleStart}
            activeOpacity={0.85}>
            <Text style={[s.startBtnText, { color: theme.textInverse }]}>Start Quiz</Text>
            <Ionicons name="arrow-forward" size={18} color={theme.textInverse} />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── QUIZ ───────────────────────────────────────────────────
  if (step === 'quiz') {
    const q = quizQuestions[currentQ];
    const progress = (currentQ / quizQuestions.length) * 100;
    return (
      <SafeAreaView style={[s.safe, { backgroundColor: theme.bg }]}>
        <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={theme.bg} />
        <View style={[s.quizHeader, { backgroundColor: theme.bgSurface, borderBottomColor: theme.border }]}>
          <View style={s.progressMeta}>
            <Text style={[s.qCount, { color: theme.textSecondary }]}>
              Question {currentQ + 1} of {quizQuestions.length}
            </Text>
            <Text style={[s.qPct, { color: theme.accent }]}>{Math.round(progress)}%</Text>
          </View>
          <View style={[s.progressBg, { backgroundColor: theme.border }]}>
            <View style={[s.progressFill, { width: `${progress}%`, backgroundColor: theme.accent }]} />
          </View>
        </View>
        <ScrollView contentContainerStyle={s.quizBody}>
          <Text style={[s.questionText, { color: theme.textPrimary }]}>{q.question}</Text>
          {q.options.map((opt, i) => (
            <TouchableOpacity
              key={i}
              style={[s.optBtn, { backgroundColor: theme.bgCard, borderColor: theme.border }]}
              onPress={() => handleAnswer(opt)}
              activeOpacity={0.8}>
              <View style={[s.optLetter, { backgroundColor: theme.bgElevated }]}>
                <Text style={[s.optLetterText, { color: theme.textPrimary }]}>
                  {String.fromCharCode(65 + i)}
                </Text>
              </View>
              <Text style={[s.optText, { color: theme.textPrimary }]}>{opt.text}</Text>
              <Ionicons name="chevron-forward" size={16} color={theme.textMuted} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── RESULT ─────────────────────────────────────────────────
  if (step === 'result' && result) {
    const rIndex = faculties.findIndex((f) => f.id === result.id);
    const ac = theme.faculty[result.id] || theme.accent;
    return (
      <SafeAreaView style={[s.safe, { backgroundColor: theme.bg }]}>
        <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={theme.bg} />
        <ScrollView contentContainerStyle={s.resultBody}>
          <View style={[s.iconCircle, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
            <Ionicons name="trophy-outline" size={52} color={ac} />
          </View>
          <Text style={[s.resultLabel, { color: theme.textMuted }]}>YOUR BEST MATCH</Text>
          <View style={[s.resultIconWrap, { backgroundColor: ac + '18' }]}>
            <Ionicons name={result.icon} size={32} color={ac} />
          </View>
          <Text style={[s.resultTitle, { color: theme.textPrimary }]}>{result.name}</Text>
          <View style={[s.resultBar, { backgroundColor: ac }]} />
          <Text style={[s.resultDesc, { color: theme.textSecondary }]}>{result.description}</Text>
          <Text style={[s.coursesLabel, { color: theme.textMuted }]}>COURSES IN THIS FACULTY</Text>
          {result.courses.map((c) => (
            <View
              key={c.id}
              style={[s.resultCourseRow, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
              <Ionicons name="checkmark-circle-outline" size={16} color={ac} />
              <Text style={[s.resultCourseName, { color: theme.textSecondary }]}>{c.name}</Text>
            </View>
          ))}
          <TouchableOpacity
            style={[s.exploreBtn, { backgroundColor: theme.accent }]}
            onPress={() =>
              navigation.navigate('CourseList', { faculty: result, colorIndex: rIndex })
            }
            activeOpacity={0.85}>
            <Text style={[s.exploreBtnText, { color: theme.textInverse }]}>Explore This Faculty</Text>
            <Ionicons name="arrow-forward" size={17} color={theme.textInverse} />
          </TouchableOpacity>
          <TouchableOpacity style={s.retryBtn} onPress={restart} activeOpacity={0.7}>
            <Ionicons name="refresh-outline" size={15} color={theme.textMuted} />
            <Text style={[s.retryText, { color: theme.textMuted }]}>Retake Quiz</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return null;
}

const s = StyleSheet.create({
  safe: { flex: 1 },
  centered: { padding: 28, alignItems: 'center', paddingBottom: 48 },
  iconCircle: {
    width: 110, height: 110, borderRadius: 55,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 1.5, marginBottom: 20, marginTop: 16,
  },
  introTitle: { fontSize: 28, fontWeight: '900', textAlign: 'center', letterSpacing: 0.5 },
  introSub: { fontSize: 14, textAlign: 'center', marginTop: 6, marginBottom: 12 },
  introDesc: {
    fontSize: 13, textAlign: 'center', lineHeight: 21,
    marginBottom: 24, paddingHorizontal: 10,
  },
  featureRow: {
    width: '100%', flexDirection: 'row', alignItems: 'center',
    gap: 14, borderRadius: 12, padding: 14, marginBottom: 10, borderWidth: 1,
  },
  featureText: { fontSize: 14 },
  startBtn: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    paddingHorizontal: 40, paddingVertical: 16, borderRadius: 32, marginTop: 10,
  },
  startBtnText: { fontWeight: '900', fontSize: 17 },
  quizHeader: {
    paddingHorizontal: 20, paddingVertical: 14,
    gap: 10, borderBottomWidth: 1,
  },
  progressMeta: { flexDirection: 'row', justifyContent: 'space-between' },
  qCount: { fontSize: 12, fontWeight: '600' },
  qPct: { fontSize: 12, fontWeight: '700' },
  progressBg: { height: 5, borderRadius: 3, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 3 },
  quizBody: { padding: 24, paddingBottom: 48 },
  questionText: { fontSize: 21, fontWeight: '800', lineHeight: 30, marginBottom: 24 },
  optBtn: {
    flexDirection: 'row', alignItems: 'center',
    borderRadius: 14, padding: 16, gap: 14,
    marginBottom: 12, borderWidth: 1,
  },
  optLetter: {
    width: 36, height: 36, borderRadius: 18,
    alignItems: 'center', justifyContent: 'center',
  },
  optLetterText: { fontWeight: '900', fontSize: 15 },
  optText: { flex: 1, fontSize: 14, lineHeight: 20 },
  resultBody: { padding: 28, alignItems: 'center', paddingBottom: 48 },
  resultLabel: { fontSize: 10, letterSpacing: 2.5, marginBottom: 10 },
  resultIconWrap: {
    width: 64, height: 64, borderRadius: 32,
    alignItems: 'center', justifyContent: 'center', marginBottom: 10,
  },
  resultTitle: { fontSize: 20, fontWeight: '900', textAlign: 'center', lineHeight: 28, marginBottom: 12 },
  resultBar: { height: 3, width: 60, borderRadius: 2, marginBottom: 16 },
  resultDesc: { fontSize: 13, lineHeight: 21, textAlign: 'center', marginBottom: 24 },
  coursesLabel: {
    fontSize: 10, fontWeight: '700', letterSpacing: 2,
    alignSelf: 'flex-start', marginBottom: 10,
  },
  resultCourseRow: {
    width: '100%', flexDirection: 'row', alignItems: 'center',
    gap: 10, borderRadius: 10, padding: 12, marginBottom: 8, borderWidth: 1,
  },
  resultCourseName: { flex: 1, fontSize: 13 },
  exploreBtn: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    paddingHorizontal: 28, paddingVertical: 15, borderRadius: 30,
    width: '100%', justifyContent: 'center', marginTop: 20,
  },
  exploreBtnText: { fontWeight: '900', fontSize: 16 },
  retryBtn: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 16 },
  retryText: { fontSize: 14 },
});
