"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const TextInput = (_a) => {
    var _b, _c;
    var { label, error, containerStyle, inputStyle, leftIcon, rightIcon, style } = _a, rest = __rest(_a, ["label", "error", "containerStyle", "inputStyle", "leftIcon", "rightIcon", "style"]);
    const [focused, setFocused] = (0, react_1.useState)(false);
    const showError = Boolean(error);
    const borderColor = showError ? styles.error.borderColor : focused ? styles.focus.borderColor : styles.default.borderColor;
    return (<react_native_1.View style={[styles.wrapper, containerStyle]}>
      {label ? <react_native_1.Text style={styles.label}>{label}</react_native_1.Text> : null}
      <react_native_1.View style={[styles.inputContainer, { borderColor }, style]}>
        {leftIcon ? <react_native_1.View style={styles.icon}>{leftIcon}</react_native_1.View> : null}
        <react_native_1.TextInput {...rest} style={[styles.input, inputStyle]} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} editable={(_b = rest.editable) !== null && _b !== void 0 ? _b : true} accessibilityLabel={(_c = rest.accessibilityLabel) !== null && _c !== void 0 ? _c : label} accessibilityHint={rest.accessibilityHint} accessibilityRole="text"/>
        {rightIcon ? <react_native_1.View style={styles.icon}>{rightIcon}</react_native_1.View> : null}
      </react_native_1.View>
      {showError && typeof error === 'string' ? <react_native_1.Text style={styles.errorText}>{error}</react_native_1.Text> : null}
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
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
exports.default = TextInput;
