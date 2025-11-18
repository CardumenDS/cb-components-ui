import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CollapseItem {
  id: string;
  title: string;
  children: React.ReactNode;
}

interface NavCollapseProps {
  items: CollapseItem[];
  onOpenChange?: (open: { id: string | null; title?: string }) => void;
}

const NavCollapse: React.FC<NavCollapseProps> = ({ items, onOpenChange }) => {
  const [openId, setOpenId] = useState<string | null>(items.length ? items[0].id : null);

  useEffect(() => {
    if (onOpenChange) {
      const current = items.find(i => i.id === openId);
      onOpenChange({ id: openId, title: current?.title });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openId]);

  return (
    <View style={styles.container}>
      {items.map(item => {
        const open = item.id === openId;
        const onHeaderPress = () => {
          const newOpen = open ? null : item.id;
          setOpenId(newOpen);
          if (onOpenChange) onOpenChange({ id: newOpen, title: newOpen ? item.title : undefined });
        };

        return (
          <View key={item.id} style={styles.item}>
            <TouchableOpacity onPress={onHeaderPress} style={styles.header} accessibilityRole="button">
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.chev}>{open ? '\u25be' : '\u25b8'}</Text>
            </TouchableOpacity>

            {open ? <View style={styles.body}>{item.children}</View> : null}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '100%', paddingLeft: 16, paddingRight: 16 },
  item: { marginBottom: 8 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 12, backgroundColor: '#fff', borderRadius: 8 },
  title: { fontWeight: '700' },
  chev: { fontSize: 18 },
  body: { marginTop: 8, padding: 24, backgroundColor: '#fff', borderRadius: 8 },
});

export default NavCollapse;
