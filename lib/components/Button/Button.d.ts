import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
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
declare const Button: React.FC<ButtonProps>;
export default Button;
