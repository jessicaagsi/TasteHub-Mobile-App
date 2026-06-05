import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

import axios from 'axios';

const API_URL = 'https://6a219723b1d0aaf32b4fb9b0.mockapi.io/Cart';

export default function DetailScreen({ route, navigation }) {

  const { item } = route.params;

  // ========================
  // POST - Tambah item ke cart
  // ========================
  const addToCart = async () => {
    try {
      await axios.post(API_URL, {
        name: item.name,
        price: item.price,
        quantity: 1,
        category: item.category,
        imageKey: item.id  // simpan id sebagai key untuk mapping gambar
      });

      Alert.alert(
        '✅ Berhasil',
        `${item.name} ditambahkan ke cart!`,
        [
          { text: 'Lanjut Belanja', style: 'cancel' },
          {
            text: 'Lihat Cart',
            onPress: () => navigation.navigate('Main', { screen: 'Cart' })
          }
        ]
      );
    } catch (error) {
      console.log('POST error:', error);
      Alert.alert('Error', 'Gagal menambahkan ke cart');
    }
  };

  return (
    <View style={styles.container}>

      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.desc}>{item.description}</Text>

      <TouchableOpacity style={styles.button} onPress={addToCart}>
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
