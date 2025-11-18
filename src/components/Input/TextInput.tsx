import React, { useState } from 'react';
import { View, TextInput as RNTextInput, Text, StyleSheet, TextInputProps as RNTextInputProps, ViewStyle, TextStyle } from 'react-native';

export interface InputProps extends RNTextInputProps {
  label?: string;
  error?: string | boolean;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

const TextInput: React.FC<InputProps> = ({ label, error, containerStyle, inputStyle, leftIcon, rightIcon, style, ...rest }) => {
  const [focused, setFocused] = useState(false);

  const showError = Boolean(error);
  const borderColor = showError ? styles.error.borderColor : focused ? styles.focus.borderColor : styles.default.borderColor;

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={[styles.inputContainer, { borderColor }, style as any]}>
        {leftIcon ? <View style={styles.icon}>{leftIcon}</View> : null}
        <RNTextInput
          {...rest}
          style={[styles.input, inputStyle]}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          editable={rest.editable ?? true}
          accessibilityLabel={rest.accessibilityLabel ?? label}
          accessibilityHint={rest.accessibilityHint}
          accessibilityRole="text"
        />
        {rightIcon ? <View style={styles.icon}>{rightIcon}</View> : null}
      </View>
      {showError && typeof error === 'string' ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginVertical: 8
  },
  label: {
    marginBottom: 6,
    color: '#111',
    fontSize: 14
  },
  inputContainer: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  input: {
    flex: 1,
    height: '100%',
    paddingVertical: 0,
    color: '#111',
    fontSize: 16
  },
  icon: {
    marginHorizontal: 6
  },
  default: {
    borderColor: '#D1D5DB'
  },
  focus: {
    borderColor: '#007AFF'
  },
  error: {
    borderColor: '#EF4444'
  },
  errorText: {
    marginTop: 6,
    color: '#EF4444',
    fontSize: 12
  },
  disabled: {
    opacity: 0.6,
    backgroundColor: '#F3F4F6'
  }
});

export default TextInput;

// export a stable public prop type name
export type TextInputProps = InputProps;
