"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const DocLayout = ({ title, children, sidebar, headerRight, sidebarWidth }) => {
    return (<react_native_1.View style={styles.container}>
      <react_native_1.View style={styles.header}>
        <react_native_1.Text style={styles.title}>{title}</react_native_1.Text>
  {/** headerRight renders to the right of the title when provided */}
  {headerRight ? <react_native_1.View>{headerRight}</react_native_1.View> : null}
      </react_native_1.View>

      <react_native_1.View style={styles.body}>
  <react_native_1.View style={[styles.sidebar, sidebarWidth ? { width: sidebarWidth } : null]}>
          <react_native_1.ScrollView contentContainerStyle={styles.sidebarScroll}>{sidebar}</react_native_1.ScrollView>
        </react_native_1.View>

        <react_native_1.View style={styles.content}>{children}</react_native_1.View>
      </react_native_1.View>
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F7F7FA', padding: 24 },
    header: { paddingVertical: 12 },
    title: { fontSize: 22, fontWeight: '700' },
    body: { flex: 1, flexDirection: 'row', marginTop: 12 },
    sidebar: { width: 240, marginRight: 24 },
    content: { flex: 1, paddingLeft: 8, alignItems: 'stretch' },
    sidebarScroll: { paddingVertical: 8 },
    singleColumn: { flexDirection: 'column' }
});
exports.default = DocLayout;
