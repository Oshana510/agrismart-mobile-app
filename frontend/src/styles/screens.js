import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from './colors';




// Labor Screen Styles
export const laborStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    margin: spacing.md,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  laborName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  laborRole: {
    fontSize: 14,
    color: colors.secondary,
    marginTop: spacing.xs,
  },
  laborRate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: spacing.xs,
  },
  attendanceSection: {
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.mediumGray,
  },
  attendanceStatus: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  attendancePresent: {
    color: colors.success,
    fontWeight: 'bold',
  },
  attendanceAbsent: {
    color: colors.error,
    fontWeight: 'bold',
  },
  attendanceButtons: {
    flexDirection: 'row',
    marginTop: spacing.sm,
  },
  attendanceButton: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.sm,
    marginRight: spacing.sm,
  },
  presentButton: {
    backgroundColor: colors.success,
  },
  absentButton: {
    backgroundColor: colors.error,
  },
  attendanceButtonText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

