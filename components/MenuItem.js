import React, { useRef } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity,
  Alert
} from 'react-native';

import axios from 'axios';

const API_URL = 'https://6a219723b1d0aaf32b4fb9b0.mockapi.io/Cart';

export default function MenuItem({
  item,
  onPress,
  navigation
}) {

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  };

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
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={[
          styles.card,
          { transform: [{ scale: scaleAnim }] }
        ]}
      >
        <Image source={item.image} style={styles.image} />

        <View style={styles.info}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.rating}>⭐ 4.9</Text>
          <Text style={styles.price}>{item.price}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={addToCart}
          >
            <Text style={styles.buttonText}>🛒 Add to Cart</Text>
          </TouchableOpacity>
        </View>

      </Animated.View>
    </TouchableWithoutFeedback>
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
    marginBottom: 5
  },
  price: {
    color: '#ff7f50',
    fontWeight: 'bold',
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
