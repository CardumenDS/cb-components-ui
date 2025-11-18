import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import NavCollapse from './src/components/Docs/NavCollapse';
import { Button, TextInput } from './src';
import CodeSnippet from './src/components/Docs/CodeSnippet';

export default function App() {
  const [email, setEmail] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const [activeNavTitle, setActiveNavTitle] = useState<string | undefined>(undefined);

  const items = [
    {
      id: 'button',
      title: 'Button',
      children: (
        <View style={{ paddingVertical: 8 }}>
          <View style={{ flexDirection: 'column', gap: 12 }}>
            <View style={{ marginBottom: 12 }}>
              <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 8 }}>Visión general</Text>
              <Text style={{ marginTop: 8, color: '#374151', fontSize: 16, marginBottom: 24 }}>Es un elemento de interfaz de usuario que permite al usuario interactuar desencadenando una acción.</Text>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Button title="Primary" variant="primary" onPress={() => { }} />
              <Text style={{ marginTop: 8, color: '#374151' }}>- Primary: acción principal, color destacado para llamadas a la acción.</Text>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Button title="Secondary" variant="secondary" onPress={() => { }} />
              <Text style={{ marginTop: 8, color: '#374151' }}>- Secondary: acción secundaria, alternativa visual al primary.</Text>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Button title="Ghost" variant="ghost" onPress={() => { }} />
              <Text style={{ marginTop: 8, color: '#374151' }}>- Ghost: botón transparente para acciones menos prominentes.</Text>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Button title="Disabled" variant="disabled" disabled onPress={() => { }} />
              <Text style={{ marginTop: 8, color: '#374151' }}>- Disabled: estado inactivo; no interactuable.</Text>
            </View>

            {/* Usage snippets (copy & paste) */}
            <View style={{ marginTop: 24 }}>
              <Text style={{ fontSize: 14, fontWeight: '700', marginBottom: 8 }}>Ejemplos</Text>

              <CodeSnippet code={`<Button title="Primary" variant="primary" onPress={() => { /* action */ }} />`} />
              <CodeSnippet code={`<Button title="Secondary" variant="secondary" onPress={() => { /* action */ }} />`} />
              <CodeSnippet code={`<Button title="Ghost" variant="ghost" onPress={() => { /* action */ }} />`} />
              <CodeSnippet code={`<Button title="Disabled" variant="disabled" disabled />`} />
            </View>

          </View>
        </View>
      ),
    },
    {
      id: 'input',
      title: 'Input Text',
      children: (
        <View style={{ paddingVertical: 8 }}>
          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 8 }}>Visión general</Text>
            <Text style={{ color: '#374151', fontSize: 15, marginBottom: 12 }}>Componente para capturar texto del usuario. Soporta label, placeholder, estados (focused, error, disabled), y callbacks como onChangeText.</Text>
          </View>

          <View style={{ marginBottom: 12 }}>
            <TextInput label="Email" placeholder="you@example.com" value={email} onChangeText={setEmail} />
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontWeight: '700', marginBottom: 6 }}>Estados</Text>
            <Text style={{ color: '#374151', marginBottom: 6 }}>- Default: campo vacío con label y placeholder.</Text>
            <Text style={{ color: '#374151', marginBottom: 6 }}>- Focused: borde o sombra que indica foco.</Text>
            <Text style={{ color: '#374151', marginBottom: 6 }}>- Error: muestra mensaje de error y estilo rojo.</Text>
            <Text style={{ color: '#374151', marginBottom: 6 }}>- Disabled: campo no interactivo, con estilo atenuado.</Text>
          </View>

          <View style={{ marginTop: 12 }}>
            <Text style={{ fontSize: 14, fontWeight: '700', marginBottom: 8 }}>Ejemplos</Text>

            <CodeSnippet code={`<TextInput label="Email" placeholder="you@example.com" value={email} onChangeText={setEmail} />`} />
            <CodeSnippet code={`<TextInput label="Password" secureTextEntry placeholder="••••••••" />`} />
            <CodeSnippet code={`<TextInput label="Username" value="jdoe" editable={false} /> // disabled / readonly`} />
            <CodeSnippet code={`<TextInput label="Email" placeholder="you@example.com" error="Formato inválido" /> // muestra estado de error`} />
          </View>
        </View>
      ),
    }
  ];

  // initialize activeNavTitle with first item title
  useEffect(() => {
    if (items && items.length) setActiveNavTitle(items[0].title);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#F3F4F6' }}>
      <ScrollView
        stickyHeaderIndices={[0]}
        contentContainerStyle={{ paddingTop: 16, paddingHorizontal: 8, paddingBottom: 32 }}
        onScroll={(e) => {
          const y = e.nativeEvent.contentOffset.y;
          // when user scrolls down past the top area, mark as sticky
          setIsSticky(y > 8);
        }}
        scrollEventThrottle={16}
      >
        {/* Sticky header: only the title */}
        <View style={{ backgroundColor: '#F3F4F6', paddingTop: 40, paddingBottom: 8 }}>
          <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
            <Text style={{ fontSize: isSticky ? 24 : 32, fontWeight: '800', color: '#222D42' }}>Document View Components</Text>
          </View>
          {/* secondary sticky row: show activeNavTitle only when header is sticky */}
          {isSticky ? (
            <View style={{ paddingHorizontal: 16, paddingBottom: 8 }}>
              <Text style={{ marginTop: 6, fontSize: 14, fontWeight: '600', color: '#6B7280' }}>{activeNavTitle}</Text>
            </View>
          ) : null}
        </View>

        {/* Subtitle: not sticky */}
        <View style={{ marginBottom: 32, paddingHorizontal: 16 }}>
          <Text style={{ marginTop: 8, color: '#6B7280', fontSize: 15, lineHeight: 22 }}>Cardumen DS es el sistema de diseño de Compartamos Banco que unifica la experiencia digital mediante componentes, estilos y patrones estandarizados.</Text>
        </View>

        <NavCollapse items={items} onOpenChange={(open) => setActiveNavTitle(open.title)} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
