import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Clipboard } from 'react-native';

const CodeSnippet: React.FC<{ code: string; lang?: string }> = ({ code, lang = 'tsx' }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      // react-native Clipboard
      // @ts-ignore
      if (Clipboard && Clipboard.setString) {
        // @ts-ignore
        Clipboard.setString(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
        return true;
      }

      // web fallback
      if (typeof navigator !== 'undefined' && (navigator as any).clipboard && (navigator as any).clipboard.writeText) {
        await (navigator as any).clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
        return true;
      }
    } catch (e) {
      // ignore
    }
    return false;
  };

  const onCopy = async () => {
    await copyToClipboard(code);
  };

  return (
    <View style={{ marginBottom: 16 }}>
      <View style={styles.snippetCard}>
        <View style={styles.snippetHeader}>
          <Text style={styles.langLabel}>{lang}</Text>
          <TouchableOpacity onPress={onCopy} style={styles.copyPill} accessibilityRole="button">
            <Text style={styles.copyPillIcon}>{copied ? '✓' : '📋'}</Text>
            <Text style={styles.copyPillText}>{copied ? 'Copied' : 'Copy'}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 12 }}>
          <View style={styles.snippetBox}>
            <Text style={styles.codeText}>{code}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CodeSnippet;

const styles = StyleSheet.create({
  snippetCard: { backgroundColor: '#292C36', borderRadius: 10, overflow: 'hidden', marginBottom: 12 },
  snippetHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 8, backgroundColor: '#18181cff' },
  langLabel: { color: '#F8FAFC', fontWeight: '700', backgroundColor: '#0F172A', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  copyPill: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#0F172A', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 20 },
  copyPillIcon: { color: '#F8FAFC', marginRight: 8 },
  copyPillText: { color: '#F8FAFC', fontWeight: '700' },
  snippetBox: { flex: 1, backgroundColor: '#292C36', padding: 12, borderRadius: 8, paddingRight: 56, paddingBottom: 24 },
  codeText: { fontFamily: 'monospace', color: '#F8FAFC' }
});
