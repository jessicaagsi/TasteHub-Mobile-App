import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const categories = ['All', 'Food', 'Drinks', 'Dessert'];

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat}
          style={[styles.button, selected === cat && styles.active]}
          onPress={() => onSelect(cat)}
        >
          <Text style={[styles.text, selected === cat && styles.activeText]}>
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
button: {
  paddingVertical: 8,
  paddingHorizontal: 16,
  backgroundColor: '#eee',
  borderRadius: 20,
  marginRight: 10,
  alignSelf: 'flex-start' // ⬅️ biar ga stretch
},
  active: {
    backgroundColor: '#ff7f50'
  },
  text: {
    color: '#555'
  },
  activeText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});