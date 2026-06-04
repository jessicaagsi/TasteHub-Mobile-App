import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

// Import component
import MenuItem from './MenuItem';
import CategoryFilter from './CategoryFilter';
import FeaturedMenu from './FeaturedMenu';

// Data menu restoran
const menuData = [
  { 
    id: '1', 
    name: 'Sushi Roll', 
    price: 'Rp 45.000', 
    category: 'Food', 
    image: require('../assets/sushiroll.webp')
  },
  { 
    id: '2', 
    name: 'Tamago Sushi', 
    price: 'Rp 30.000', 
    category: 'Food', 
    image: require('../assets/tamagosushi.jpg')
  },
  { 
    id: '3', 
    name: 'Matcha Latte', 
    price: 'Rp 30.000', 
    category: 'Drinks', 
    image: require('../assets/matchalatte.avif')
  },
  { 
    id: '4', 
    name: 'Daifuku Mochi', 
    price: 'Rp 35.000', 
    category: 'Dessert', 
    image: require('../assets/daifukumochi.jpg')
  }
];

export default function MenuList({ navigation }) {

  // STATE
  // Menyimpan kategori yang dipilih user
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter menu berdasarkan kategori yang dipilih
  const filteredData =
    selectedCategory === 'All'
      ? menuData
      : menuData.filter(item => item.category === selectedCategory);

  return (
    <View style={{ flex: 1 }}>

      {/* Props:
          selected  -> mengirim kategori aktif
          onSelect  -> mengirim fungsi untuk mengganti kategori
      */}
      <CategoryFilter
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* Component banner / slider */}
      <FeaturedMenu />

      {/* FlatList untuk menampilkan data menu */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}

        // Props item dikirim ke MenuItem
      renderItem={({ item }) => (
      <MenuItem
      item={item}
      navigation={navigation}
      onPress={() => navigation.navigate('Detail')}
      />
)}

        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}