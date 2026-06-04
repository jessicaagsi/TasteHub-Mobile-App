import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

const categories = ['All', 'Food', 'Drinks', 'Dessert'];

export default function CategoryFilter({ selected, onSelect }) {
  return (

    <View style={styles.wrapper}>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >

        {categories.map((cat) => (

          <TouchableOpacity
            key={cat}
            style={[
              styles.button,
              selected === cat && styles.active
            ]}
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

    </View>
  );
}

const styles = StyleSheet.create({

  wrapper: {
    height: 50 // ⬅️ FIX UTAMA
  },

  container: {
    alignItems: 'center'
  },

  button: {
    height: 40,
    paddingHorizontal: 18,
    backgroundColor: '#eee',
    borderRadius: 25,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  active: {
    backgroundColor: '#ff7f50'
  },

  text: {
    color: '#555',
    fontSize: 14
  },

  activeText: {
    color: '#fff',
    fontWeight: 'bold'
  }

});