"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Button = ({ title, onPress, variant = 'primary', disabled = false, style, textStyle, accessibilityLabel, accessibilityHint }) => {
    const containerStyle = [styles.base, styles[variant], disabled && styles.disabled, style];
    const labelStyle = [styles.label, textStyle];
    return (<react_native_1.Pressable onPress={onPress} disabled={disabled} style={containerStyle} accessibilityRole="button" accessibilityLabel={accessibilityLabel !== null && accessibilityLabel !== void 0 ? accessibilityLabel : title} accessibilityHint={accessibilityHint}>
      <react_native_1.Text style={labelStyle}>{title}</react_native_1.Text>
    </react_native_1.Pressable>);
};
const styles = react_native_1.StyleSheet.create({
    base: {
        paddingVertical: 8,
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
    primary: {
        backgroundColor: '#CA005D'
    },
    secondary: {
        backgroundColor: '#34C759'
    },
    ghost: {
        backgroundColor: 'transparent'
    },
    disabled: {
        backgroundColor: '#A9A9A9'
    }
});
exports.default = Button;
