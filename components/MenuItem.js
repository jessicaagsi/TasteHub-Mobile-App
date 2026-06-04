import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

export default function MenuItem({ item, onPress, navigation }) {
  return (

    // Card menu bisa diklik
    <TouchableOpacity style={styles.card} onPress={onPress}>

      {/* Gambar menu */}
      <Image source={item.image} style={styles.image} />

      {/* Informasi menu */}
      <View style={styles.info}>

        {/* Nama menu */}
        <Text style={styles.title}>{item.name}</Text>

        {/* Rating */}
        <Text style={styles.rating}>⭐ 4.9</Text>

        {/* Harga */}
        <Text style={styles.price}>{item.price}</Text>

        {/* Tombol cart */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>🛒 Add to Cart</Text>
        </TouchableOpacity>

      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3
  },

  image: {
    width: 110,
    height: 110
  },

  info: {
    flex: 1,
    padding: 12
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },

  rating: {
    color: '#888',
    fontSize: 13,
    marginBottom: 5
  },

  price: {
    color: '#ff7f50',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10
  },

  button: {
    backgroundColor: '#000',
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600'
  }

});