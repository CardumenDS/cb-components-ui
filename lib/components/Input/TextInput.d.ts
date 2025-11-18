import React from 'react';
import { TextInputProps as RNTextInputProps, ViewStyle, TextStyle } from 'react-native';
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
declare const TextInput: React.FC<InputProps>;
export default TextInput;
export type TextInputProps = InputProps;
