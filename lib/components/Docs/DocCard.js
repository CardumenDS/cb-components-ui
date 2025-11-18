"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const DocCard = ({ title, description, children, snippet }) => {
    return (<react_native_1.View style={styles.card}>
      <react_native_1.Text style={styles.title}>{title}</react_native_1.Text>
      {description ? <react_native_1.Text style={styles.desc}>{description}</react_native_1.Text> : null}
      <react_native_1.View style={styles.preview}>{children}</react_native_1.View>
      {snippet ? <react_native_1.View style={styles.snippet}><react_native_1.Text style={styles.code}>{snippet}</react_native_1.Text></react_native_1.View> : null}
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    card: { backgroundColor: '#fff', borderRadius: 8, padding: 12, marginBottom: 12, overflow: 'hidden', maxWidth: 360 },
    title: { fontSize: 16, fontWeight: '700', marginBottom: 6 },
    desc: { color: '#6B7280', marginBottom: 8 },
    preview: { marginBottom: 8, alignItems: 'center', justifyContent: 'center', minHeight: 64 },
    snippet: { backgroundColor: '#111827', borderRadius: 6, padding: 8 },
    code: { color: '#fff', fontFamily: 'monospace', fontSize: 12 }
});
exports.default = DocCard;
