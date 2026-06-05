import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

// Import component
import MenuItem from './MenuItem';
import CategoryFilter from './CategoryFilter';
import FeaturedMenu from './FeaturedMenu';


// Data menu restoran
const menuData = [

  // FOOD
  { 
    id: '1', 
    name: 'Sushi Roll', 
    price: 'Rp 45.000', 
    category: 'Food', 
    image: require('../assets/sushiroll.webp'),
    description: 'Delicious sushi roll made with fresh salmon, premium japanese rice, and creamy avocado. Served with soy sauce, ginger, and wasabi for an authentic japanese dining experience.'
  },

  { 
    id: '2', 
    name: 'Tamago Sushi', 
    price: 'Rp 30.000', 
    category: 'Food', 
    image: require('../assets/tamagosushi.jpg'),
    description: 'Traditional tamago sushi with soft japanese omelette layered on seasoned rice. Has a sweet and savory flavor that is perfect for sushi lovers and beginners.'
  },

  { 
    id: '3', 
    name: 'Ramen Bowl', 
    price: 'Rp 55.000', 
    category: 'Food', 
    image: require('../assets/RamenBowl.png'),
    description: 'Warm japanese ramen served with flavorful broth, soft noodles, boiled egg, and premium sliced chicken for a comforting and satisfying meal.'
  },

  { 
    id: '4', 
    name: 'Chicken Katsu Curry', 
    price: 'Rp 48.000', 
    category: 'Food', 
    image: require('../assets/katsucurry.jpg'),
    description: 'Crispy japanese chicken katsu served with warm rice and rich savory curry sauce. A comforting japanese dish with crunchy texture and flavorful creamy curry.'
  },

  { 
    id: '5', 
    name: 'Tempura', 
    price: 'Rp 40.000', 
    category: 'Food', 
    image: require('../assets/tempura.webp'),
    description: 'Light and crispy tempura made with fresh shrimp and vegetables coated in japanese batter. Best enjoyed with traditional dipping sauce.'
  },

  { 
    id: '6', 
    name: 'Takoyaki', 
    price: 'Rp 28.000', 
    category: 'Food', 
    image: require('../assets/takoyaki.avif'),
    description: 'Popular japanese street food filled with octopus pieces and topped with savory sauce, mayonnaise, and bonito flakes.'
  },

  { 
    id: '7', 
    name: 'Gyoza', 
    price: 'Rp 32.000', 
    category: 'Food', 
    image: require('../assets/gyoza.jpg'),
    description: 'Japanese dumplings filled with seasoned chicken and vegetables, pan fried until crispy outside and juicy inside.'
  },

  { 
    id: '8', 
    name: 'Onigiri', 
    price: 'Rp 20.000', 
    category: 'Food', 
    image: require('../assets/onigiri.webp'),
    description: 'Traditional japanese rice ball wrapped with seaweed and filled with delicious savory ingredients.'
  },


  // DRINKS
  { 
    id: '9', 
    name: 'Matcha Latte', 
    price: 'Rp 30.000', 
    category: 'Drinks', 
    image: require('../assets/matchalatte.avif'),
    description: 'Refreshing matcha latte made from high quality japanese green tea powder blended with creamy milk. Perfect drink for relaxing and enjoying your favorite sushi.'
  },

  { 
    id: '10', 
    name: 'Ocha Tea', 
    price: 'Rp 15.000', 
    category: 'Drinks', 
    image: require('../assets/ochatea.jpg'),
    description: 'Classic japanese green tea with refreshing taste and calming aroma that pairs perfectly with sushi and japanese dishes.'
  },

  { 
    id: '11', 
    name: 'Mineral Water', 
    price: 'Rp 10.000', 
    category: 'Drinks', 
    image: require('../assets/mineralwater.jpg'),
    description: 'Fresh mineral water served chilled to complement your japanese dining experience and keep you refreshed during every meal.'
  },


  // DESSERT
  { 
    id: '12', 
    name: 'Daifuku Mochi', 
    price: 'Rp 35.000', 
    category: 'Dessert', 
    image: require('../assets/daifukumochi.jpg'),
    description: 'Soft and chewy daifuku mochi filled with sweet cream and delicious flavors. A popular japanese dessert with a smooth texture and delightful taste.'
  },

  { 
    id: '13', 
    name: 'Dorayaki', 
    price: 'Rp 22.000', 
    category: 'Dessert', 
    image: require('../assets/dorayaki.jpg'),
    description: 'Fluffy japanese pancake sandwich filled with sweet red bean paste that creates a soft and delightful dessert experience.'
  },

  { 
    id: '14', 
    name: 'Taiyaki', 
    price: 'Rp 24.000', 
    category: 'Dessert', 
    image: require('../assets/taiyaki.webp'),
    description: 'Fish shaped japanese pastry filled with sweet cream and baked until golden brown with crispy outside texture.'
  }

];


export default function MenuList({ navigation }) {

  // STATE
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter menu
  const filteredData =
    selectedCategory === 'All'
      ? menuData
      : menuData.filter(
          item => item.category === selectedCategory
        );

  return (
    <View style={{ flex: 1 }}>

      {/* Filter kategori */}
      <CategoryFilter
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* Banner */}
      <FeaturedMenu />

      {/* List menu */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (
          <MenuItem
            item={item}
            navigation={navigation}

            onPress={() =>
              navigation.navigate(
                'Detail',
                { item }
              )
            }
          />
        )}

        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}