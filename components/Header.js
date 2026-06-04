import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TasteHub.</Text>
      <Text style={styles.subtitle}>Discover your taste ✨</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  logo: {
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: 1
  },
  subtitle: {
    color: '#888',
    marginTop: 4
  }
});