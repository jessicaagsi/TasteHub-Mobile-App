import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// Data kategori
const categories = ['All', 'Food', 'Drinks', 'Dessert'];

export default function CategoryFilter({ selected, onSelect }) {
  return (

    // Scroll horizontal untuk kategori
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}

      // Styling child ScrollView
contentContainerStyle={[
  styles.container,
  { paddingHorizontal: 2 }
]}
    >

      {/* Menampilkan kategori menggunakan map */}
      {categories.map((cat) => (

        <TouchableOpacity
          key={cat}

          // Jika kategori aktif maka style active diterapkan
          style={[
            styles.button,
            selected === cat && styles.active
          ]}

          // Mengubah state kategori saat tombol ditekan
          onPress={() => onSelect(cat)}
        >

          <Text
            style={[
              styles.text,
              selected === cat && styles.activeText
            ]}
          >
            {cat}
          </Text>

        </TouchableOpacity>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  // Container kategori
container: {
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 10,
  paddingLeft: 5 // ⬅️ kasih ruang kiri
},
  // Style tombol kategori
button: {
  paddingVertical: 12,
  paddingHorizontal: 15,
  backgroundColor: '#eee',
  borderRadius: 20,
  marginRight: 10,
  minHeight: 37,
  justifyContent: 'center'
},

  // Style kategori aktif
  active: {
    backgroundColor: '#ff7f50'
  },

  // Text biasa
  text: {
    color: '#555'
  },

  // Text kategori aktif
  activeText: {
    color: '#fff',
    fontWeight: 'bold'
  }

});