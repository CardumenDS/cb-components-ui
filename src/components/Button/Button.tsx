import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'disabled';

export interface ButtonProps {
  title: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, variant = 'primary', disabled = false, style, textStyle, accessibilityLabel, accessibilityHint }) => {
  const containerStyle = [styles.base, styles[variant], disabled && styles.disabled, style];
  // determine variant label style
  const variantLabelStyle =
    disabled ? styles.labelDisabled :
    variant === 'primary' ? styles.labelPrimary :
    variant === 'secondary' ? styles.labelSecondary :
    variant === 'ghost' ? styles.labelGhost : styles.label;

  const labelStyle = [styles.label, variantLabelStyle, textStyle];

  return (
    <Pressable onPress={onPress} disabled={disabled} style={containerStyle} accessibilityRole="button" accessibilityLabel={accessibilityLabel ?? title} accessibilityHint={accessibilityHint}>
      <Text style={labelStyle}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
  paddingVertical: 12,
  paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  labelPrimary: {
    color: '#FFFFFF'
  },
  labelSecondary: {
    color: '#CA005D'
  },
  labelGhost: {
    color: '#CA005D'
  },
  labelDisabled: {
    color: '#8994A6'
  },
  primary: {
    backgroundColor: '#CA005D'
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#CA005D'
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  disabled: {
    backgroundColor: '#ECECED'
  }
});

export default Button;
