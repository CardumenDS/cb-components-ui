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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const NavCollapse = ({ items }) => {
    const [openId, setOpenId] = (0, react_1.useState)(items.length ? items[0].id : null);
    return (<react_native_1.View style={styles.container}>
      {items.map(item => {
            const open = item.id === openId;
            return (<react_native_1.View key={item.id} style={styles.item}>
            <react_native_1.TouchableOpacity onPress={() => setOpenId(open ? null : item.id)} style={styles.header} accessibilityRole="button">
              <react_native_1.Text style={styles.title}>{item.title}</react_native_1.Text>
              <react_native_1.Text style={styles.chev}>{open ? '▾' : '▸'}</react_native_1.Text>
            </react_native_1.TouchableOpacity>

            {open ? <react_native_1.View style={styles.body}>{item.children}</react_native_1.View> : null}
          </react_native_1.View>);
        })}
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: { width: '100%' },
    item: { marginBottom: 8 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 12, backgroundColor: '#fff', borderRadius: 8 },
    title: { fontWeight: '700' },
    chev: { fontSize: 18 },
    body: { marginTop: 8 }
});
exports.default = NavCollapse;
