import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

export default function DetailScreen() {

  return (
    <View style={styles.container}>

      {/* Gambar menu */}
      <Image
        source={require('../assets/sushiroll.webp')}
        style={styles.image}
      />

      {/* Nama menu */}
      <Text style={styles.title}>Sushi Roll</Text>

      {/* Harga */}
      <Text style={styles.price}>Rp 45.000</Text>

      {/* Deskripsi */}
      <Text style={styles.desc}>
        Fresh salmon sushi with japanese rice and premium ingredients.
      </Text>

      {/* Tombol cart */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🛒 Add to Cart</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },

  image: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    marginBottom: 20
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },

  price: {
    fontSize: 18,
    color: '#ff7f50',
    fontWeight: 'bold',
    marginBottom: 15
  },

  desc: {
    color: '#666',
    lineHeight: 22,
    marginBottom: 25
  },

  button: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 15,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});