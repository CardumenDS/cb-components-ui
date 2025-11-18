import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CollapseItem {
  id: string;
  title: string;
  children: React.ReactNode;
}

interface NavCollapseProps {
  items: CollapseItem[];
}

const NavCollapse: React.FC<NavCollapseProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(items.length ? items[0].id : null);

  return (
    <View style={styles.container}>
      {items.map(item => {
        const open = item.id === openId;
        return (
          <View key={item.id} style={styles.item}>
            <TouchableOpacity onPress={() => setOpenId(open ? null : item.id)} style={styles.header} accessibilityRole="button">
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.chev}>{open ? '▾' : '▸'}</Text>
            </TouchableOpacity>

            {open ? <View style={styles.body}>{item.children}</View> : null}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '100%', paddingLeft: 16 ,paddingRight: 16},
  item: { marginBottom: 8 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 12, backgroundColor: '#fff', borderRadius: 8 },
  title: { fontWeight: '700' },
  chev: { fontSize: 18 },
  body: { marginTop: 8 , padding: 24, backgroundColor: '#fff', borderRadius: 8 },
});

export default NavCollapse;
